<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Fai\Lib\Pdf;

class Pdf implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $path;
    private $idc;
    private $name;
    private $path_file_info;
    private $file_upload_info;
    private $folder_pdf;

    public $tries = 2;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($idc, $name, $path_file_info)
    {
        $this->idc = $idc;
        $this->name = $name;
        $this->path = public_path('upload/pdf').'/'.$name;
        $this->path_file_info = $path_file_info;
        $this->file_upload_info = json_decode(Storage::get($path_file_info), 1);

        $folder_pdf = public_path('pdf');
        if (!is_dir($folder_pdf)) {
            mkdir($folder_pdf);
        }
        $folder_pdf .= '/'.$idc;
        if (!is_dir($folder_pdf)) {
            mkdir($folder_pdf);
        }
        $this->folder_pdf = $folder_pdf;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle() {
        if (!$this->c2()) {
            $this->c1();
        }
    }

    private function c1() {
        $pdf = new \Spatie\PdfToImage\Pdf($this->path);
        $this->file_upload_info['page'] = $numpage = $pdf->getNumberOfPages(); // lưu lại số trang
        $this->file_upload_info['status'] = 2; // chế độ dang xử lý
        $this->update_status(); // lưu lại khởi động

        $start = 0;
        if (isset($this->file_upload_info['process'])) {
            $start = ((int)$this->file_upload_info['process']) - 1;
        }

        if (!isset($this->file_upload_info['list'])) {
            $this->file_upload_info['list'] = [];
        }

        for ($i = $start; $i < $numpage; $i++) {
            $page = $i + 1;
            $name_page = 'page-'.$page.'-'.((int)(microtime(1)*1000)).'.jpg';

            $pdf->setPage($page);
            // $pdf->setColorspace(\Imagick::COLORSPACE_RGB)->setImageFormat('jpg');
            $pdf->saveImage("{$this->folder_pdf}/{$name_page}"); // lưu lại ảnh
            $this->file_upload_info['list'][$i] =  "/pdf/{$this->idc}/$name_page";

            $this->file_upload_info['process'] = $page;
            $this->update_status();
        }

        $this->file_upload_info['status'] = 1;
        $this->update_status();
    }

    private function c2() {
        $data = Pdf::toJpg('https://giaoducharavard.edu.vn/upload/pdf/'.$this->name, $this->folder_pdf)
        // $data = Pdf::toJpg('https://bytescout-com.s3-us-west-2.amazonaws.com/files/demo-files/cloud-api/pdf-to-image/sample.pdf', $this->folder_pdf);

        if ($data['status']) {
            $this->file_upload_info['status'] = 1;
            foreach ($data['list_file'] as $file) {
                $this->file_upload_info['list'] = $this->folder_pdf.'/'.$file;
            }
            $this->update_status();
            return true;
        } else {
            return false;
        }

    }

    private function update_status() {
        Storage::put($this->path_file_info, json_encode($this->file_upload_info));
    }
}
