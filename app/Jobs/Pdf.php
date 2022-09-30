<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class Pdf implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $path;
    private $idc;
    private $path_file_info;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($idc, $path, $path_file_info)
    {
        $this->idc = $idc;
        $this->path = $path;
        $this->path_file_info = $path_file_info;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $file_upload_info = Storage::get($this->path_file_info);
        $file_upload_info = json_decode($file_upload_info, 1);

        $folder_pdf = public_path('pdf');
        if (!is_dir($folder_pdf)) {
            mkdir($folder_pdf);
        }
        $folder_pdf .= '/'.$this->idc;
        if (!is_dir($folder_pdf)) {
            mkdir($folder_pdf);
        }

        $pdf = new \Spatie\PdfToImage\Pdf($this->path);
        $file_upload_info['list'] = [];
        for ($i = 0; $i < $pdf->getNumberOfPages(); $i++) {
            $pdf->setPage(($i+1))->saveImage($folder_pdf.'/page-'.$i.'.jpg');
            $file_upload_info['list'][] =  "/pdf/{$this->idc}/page-{$i}.jpg";
        }
        $file_upload_info['status'] = 1;

        Storage::put($this->path_file_info, json_encode($file_upload_info));
    }
}
