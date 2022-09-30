<?php
namespace Fai\Lib;

// file demo "https://bytescout-com.s3.amazonaws.com/files/demo-files/cloud-api/pdf-split/sample.pdf"

class Pdf {
    private static $apiKey = 'anfha.vaf@gmail.com_ecb5bf46070c5a4a8fe29d1fcf16afede18f784a133964d392f0d02bfcfe43711fbbbeb0';
    public static function toJpg($url_file, $folder) {
        $url = "https://api.pdf.co/v1/pdf/convert/to/jpg";

        // Create request
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'x-api-key: '.self::$apiKey,
            'Content-type: application/json'
        ]);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode([
            'url' => $url_file,
            'async' => false,
        ]));

        $res = [
            'status' => 0,
            'msg' => '',
            'msg_code' => 0,
            'data' => [],
        ];

        // Execute request
        $result = curl_exec($curl);
        if (curl_errno($curl) == 0) {
            $status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            if ($status_code == 200) {
                $data = json_decode($result, true);
                if ($data['error']) {
                    //
                } else {
                    $res['list_file'] = [];
                    $page = 0;
                    foreach ($data['urls'] as $file) {
                        $page++;
                        $name_file = 'page-'.$page.'-'.((int)(microtime(1)*1000)).'.jpg';
                        $res['list_file'][] = $name_file;
                        file_put_contents($folder.'/'.$name_file, file_get_contents($file));
                    }
                    $res['status'] = 1;
                    $res['data'] = $data;
                }
            }
        }

        // Cleanup
        curl_close($curl);

        return $res;
    }
}
?>
