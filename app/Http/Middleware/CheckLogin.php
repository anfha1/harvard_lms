<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\luser;

class CheckLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $data_bind = &$GLOBALS['data_bind'];
        $data_bind = [
            'logined' => 0
        ];
        $id_user = $request->session()->get('id_user');
        if ($id_user) {
            $info_user = luser::find($id_user);
            if ($info_user && $info_user->status) {
                $data_bind['logined'] = 1;
                $data_bind['id_user'] = $id_user;
                $data_bind['info_user'] = $info_user;
            } else {
                $request->session()->forget('id_user');
            }
        }
        return $next($request);
    }
}
