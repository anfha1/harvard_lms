<?php

namespace App\Console\Commands\content;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class meta extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'content:meta';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cau hinh meta của giao dien';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $file_meta = 'config/meta.json';
        $content = [
            'title' => 'Giáo dục Harvard',
            'heading' => 'Giáo dục Harvard',
            'description' => 'Công ty giáo dục và phát triển tư duy Harvard',
            'photo' => '/logo.png',
        ];
        $meta = [
            [
                'name' => 'language',
                'content' => 'vietnamese',
            ],
            [
                'name' => 'description',
                'content' => 'Công ty giáo dục và phát triển tư duy Harvard, Niềm tin trao đi, Yêu thương còn mãi',
            ],
            [
                'name' => 'keywords',
                'content' => 'Harvard, Giáo dục, Phát triển tư duy',
            ],
            [
                'name' => 'copyright',
                'content' => 'Copyright (c) 2022 Harvard',
            ],
        ];

        Storage::put($file_meta, json_encode([
            'content' => $content,
            'meta' => $meta,
        ]));
    }
}
