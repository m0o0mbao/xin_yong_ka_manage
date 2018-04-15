<?php
defined('BASEPATH') OR exit('No direct script access allowed');


use QCloud_WeApp_SDK\Mysql\Mysql as DB;


class Demo extends CI_Controller {
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




    public function create(){
     if($_SERVER["REQUEST_METHOD"] == "POST"){
       echo "POST请求---";
          $name = isset($_POST['name']) ? $_POST['name'] : '';
          $age= isset($_POST['age']) ? $_POST['age'] : 1;
          $remark =isset($_POST['remark']) ? $_POST['remark'] : '';
         $res = DB::insert('cTest',["name"=>$name,"age"=>$age,'remark' =>$remark ]);
         echo "ceshi ShuChu";
        //  echo $_POST['age'];
     }else{
      echo "GET请求---";
       $name="name1";
          $age=12;
          $remark =isset($_POST['remark']) ? $_POST['remark'] : '';
         $res = DB::insert('cTest',["name"=>$name,"age"=>$age,'remark' =>$remark ]);
     }
    
    }
}