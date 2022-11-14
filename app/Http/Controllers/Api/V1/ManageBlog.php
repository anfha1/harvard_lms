<?php
namespace App\Http\Controllers\Api\V1;

use Fai\Lib\App;
use Fai\Lib\Validate;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\Jobs\Pdf;

use App\Models\luser;
use App\Models\lblog;
use App\Models\lcategory;

/*
    * Nơi tổng hợp các api manage của quản lý sách hướng dẫn
*/
class ManageBlog extends Controller {
    // lấy tất cả các blog
    public function get(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res([
            'blogs' => [],
            'selection' => [],
        ]);

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) { // chỉ có quản trị viên mới vô đc
                $list_blog = [];
                foreach (lblog::all()->sortByDesc('id') as $blog) {
                    $blog_info = [
                        'id' => $blog->id,
                        'name' => $blog->name,
                        // 'slug' => $blog->slug,
                        'photo' => $blog->photo,
                        'description' => $blog->description,
                        'status' => $blog->status,
                        // 'user' => 'quản trị viên',
                        // 'data' => '',
                    ];

                    $list_blog[] = $blog_info;
                }

                // lấy danh sách các bài viết được lựa chọn
                $list_select = [];
                $path_file_info = "/blog/config.json";
                $data = json_decode(Storage::get($path_file_info), 1);
                if (!empty($data) && isset($data['selection'])) {
                    $list_select = $data['selection'];
                }

                $res['blogs'] = $list_blog;
                $res['selection'] = $list_select;
                $res['status'] = 1;
            } else {
                $res['msg'] = 'Bạn không có quyền truy cập!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }
        return App::response($res);
    }

    public function select(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res();

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) { // chỉ có quản trị viên mới vô đc
                if ($request->has(['select']) && is_array($request->select)) {
                    $list_blog = [];

                    foreach ($request->select as $id_blog) {
                        $id_blog = (int)$id_blog;
                        if ($id_blog > 0) {
                            $list_blog[] = $id_blog;
                        }
                    }

                    $path_file_info = "/blog/config.json";
                    $data = json_decode(Storage::get($path_file_info), 1);

                    if (empty($data) || !is_array($data)) {
                        $data = [
                            'selection' => $list_blog,
                        ];
                    } else {
                        $data['selection'] = $list_blog;
                    }
                    Storage::put($path_file_info, json_encode($data));
                    $res['msg'] = 'Đã cập nhật list tin tức';
                    $res['status'] = 1;
                } else {
                    $res['msg'] = 'Dữ liệu truyền vào không hợp lệ';
                }
            } else {
                $res['msg'] = 'Bạn không có quyền truy cập!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }
        return App::response($res);
    }

    // Thêm blog
    public function create(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                // tiến hành tạo :))
                $blog = new lblog;
                $blog->name = $request->name;
                $blog->slug = Str::slug($request->name, '-');
                if (!empty($request->description)) {
                    $blog->description = $request->description;
                }

                if ($request->file('image')) {
                    $file = $request->file('image');
                    $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                    $file->move(public_path('upload/photo'), $filename);
                    $blog->photo = '/upload/photo/' . $filename;
                } else {
                    $imgs = config('app.photo');
                    $blog->photo = $imgs[rand(0, count($imgs)-1)];
                }

                $category = [];
                if (!empty($request->category)) {
                    $category_tmp = json_decode($request->category, 1);
                    if (is_array($category_tmp) && count($category_tmp) > 0) {
                        foreach ($category_tmp as $category_elm) {
                            if (is_string($category_elm) || is_numeric($category_elm)) {
                                // đọc từ db ra nếu có thì lưu lại id
                                $query_category = lcategory::select('id')->where('name', $category_elm)->get();
                                // nếu không có thì tạo mới
                                if ($query_category->count() > 0) {
                                    $category[] = $query_category[0]->id;
                                } else {
                                    $category_new = new lcategory;
                                    $category_new->name = $category_elm;
                                    $category_new->save();
                                    $category[] = $category_new->id;
                                }
                            }
                        }
                    }
                }

                $blog->save();
                // lưu lại data
                $path_file_info = "/blog/{$blog->id}.txt";
                $data = '';
                if (!empty($request->data) && is_string($request->data)) {
                    $data = $request->data;
                }
                Storage::put($path_file_info, $data);

                // thêm category cho blog
                if (count($category) > 0) {
                    $data_insert = [];
                    foreach ($category as $category_id) {
                        $data_insert[] = [
                            'lblog_id' => $blog->id,
                            'lcategorys_id' => $category_id,
                        ];
                    }
                    DB::table('lblog_categorys')->insert($data_insert);
                }
                $res['status'] = 1;
                $res['msg'] = 'Thêm tin tức thành công';
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }

        return App::response($res);
    }

    // lấy data của blog
    public function get_data(Request $request) {
        $request_all = $request->all();
        $res = App::Res([
            'data' => '',
            'list_category' => [],
        ]);

        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        // lấy data và trả về cho frontend
                        $path_file_info = "/blog/{$request_all['blog_id']}.txt";
                        $data = Storage::get($path_file_info);
                        if (empty($data)) {
                            $data = '';
                        }
                        // lấy danh sách category
                        $category = [];
                        $query_category = DB::table('lblog_categorys')->select('name')->where('lblog_id', $request_all['blog_id'])->join('lcategorys', 'lblog_categorys.lcategorys_id', '=', 'lcategorys.id')->get();
                        if ($query_category->count() > 0) {
                            foreach ($query_category as $category_tmp) {
                                $category[] = $category_tmp->name;
                            }
                        }
                        $res['status'] = 1;
                        $res['data'] = $data;
                        $res['list_category'] = $category;
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }
        return App::response($res);
    }

    // show blog
    public function show(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        if ($blog->status == 1) {
                            $res['msg'] = 'Tin tức đang được hiển thị!';
                        } else {
                            $blog->status = 1;
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã hiển thị tin tức!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }
        return App::response($res);
    }

    // tắt blog
    public function off(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        if ($blog->status == 1) {
                            $blog->status = 0;
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tắt hiển thị tin tức!';
                        } else {
                            $res['msg'] = 'Tin tức đang không hiển thị!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }
        return App::response($res);
    }

    // sửa blog
    public function edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $blog->name) {
                            // Tạo slug
                            $blog->name = $request->name;
                            $blog->slug = Str::slug($request->name, '-');
                            $change = true;
                        }
                        if (!empty($request->description) && $request->description != $blog->description) {
                            $blog->description = $request->description;
                            $change = true;
                        }
                        if ($request->file('image')) {
                            $file = $request->file('image');
                            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                            $file->move(public_path('upload/photo'), $filename);
                            $blog->photo = '/upload/photo/' . $filename;
                            $change = true;
                        }

                        $path_file_info = "/blog/{$blog->id}.txt";
                        $data = Storage::get($path_file_info);
                        if (!empty($request->data) && is_string($request->data) && $request->data != $data) {
                            Storage::put($path_file_info, $request->data);
                            $change = true;
                        }

                        // lấy danh sách category để kiểm tra
                        $category = [];
                        if (!empty($request->category)) {
                            $category_tmp = json_decode($request->category, 1);
                            if (is_array($category_tmp) && count($category_tmp) > 0) {
                                foreach ($category_tmp as $category_elm) {
                                    if (is_string($category_elm) || is_numeric($category_elm)) {
                                        // đọc từ db ra nếu có thì lưu lại id
                                        $query_category = lcategory::select('id')->where('name', $category_elm)->get();
                                        // nếu không có thì tạo mới
                                        if ($query_category->count() > 0) {
                                            $category[] = $query_category[0]->id;
                                        } else {
                                            $category_new = new lcategory;
                                            $category_new->name = $category_elm;
                                            $category_new->save();
                                            $category[] = $category_new->id;
                                        }
                                    }
                                }
                            }
                        }

                        // lấy category trong blog
                        $category_old = [];
                        $query_category = DB::table('lblog_categorys')->select('id', 'lcategorys_id')->where('lblog_id', $request_all['blog_id'])->get();
                        $link_relationship = [];
                        if ($query_category->count() > 0) {
                            foreach ($query_category as $category_tmp) {
                                $link_relationship[$category_tmp->lcategorys_id] = $category_tmp->id;
                                $category_old[] = $category_tmp->lcategorys_id;
                            }
                        }

                        // So sánh 2 danh sách để xem thằng nào xóa và thằng nào được thêm 
                        $list_delete = array_diff($category_old, $category); // id của mối quan hệ giữa blog và category để còn xóa
                        $list_add = array_diff($category, $category_old); // danh sách id những category cần thêm

                        if (count($list_delete) > 0) {
                            $id_delete = [];
                            foreach ($list_delete as $id) {
                                $id_delete[] = $link_relationship[$id];
                            }
                            DB::table('lblog_categorys')->whereIn('id', $id_delete)->delete();
                            $change = true;
                        }

                        if (count($list_add) > 0) {
                            $data_insert = [];
                            foreach ($list_add as $id) {
                                $data_insert[] = [
                                    'lblog_id' => $blog->id,
                                    'lcategorys_id' => $id,
                                ];
                            }
                            DB::table('lblog_categorys')->insert($data_insert);
                            $change = true;
                        }

                        if ($change) {
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã sửa lớp thành công';
                        } else {
                            $res['msg'] = 'Không có gì thay đổi!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }
        return App::response($res);
    }

    // xóa blog
    public function delete(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        // tiến hành xóa tin tức
                        $path_file_info = "/blog/{$request_all['blog_id']}.txt";
                        Storage::delete($path_file_info);
                        $blog->delete();
                        $res['msg'] = 'Đã xóa thành công!';
                        $res['status'] = 1;
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }
}