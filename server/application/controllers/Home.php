<?php
defined('BASEPATH') OR exit('No direct script access allowed');


use QCloud_WeApp_SDK\Mysql\Mysql as DB;


class Home extends CI_Controller {
    public function index() {
        $this->json([
            'code' => 0,
            'data' => [
                'msg' => 'Hello World'
            ]
        ]);


		$rows = DB::select('cTest', ['*']);

		$this->json([
			'code' => 1,
			'data' => $rows
		]);

    }


    public function getXiaoFei(){
        
    }
}