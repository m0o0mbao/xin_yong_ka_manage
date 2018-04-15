<?php
defined('BASEPATH') OR exit('No direct script access allowed');


use QCloud_WeApp_SDK\Mysql\Mysql as DB;


class Xf extends CI_Controller {
    public function index() {
     
      // echo "This is Card API!";
		  $rows = DB::select('t_xiao_fei', ['*']);

		  $this->json([
			 'code' => 1,
			 'data' => $rows
		  ]);

    }

    public function getAll(){
        $rows = DB::select('t_xiao_fei', ['*']);

      $this->json([
       'code' => 1,
       'data' => $rows
      ]);

    }


    public function update(){
        $res = DB::update('t_xiao_fei' ,['name' => "new name1","age"=>23] ,['id'=>25]);
        echo "this is Card->update";
        echo $res;
        // echo DB::last_query();
    }




    public function create(){
     if($_SERVER["REQUEST_METHOD"] == "POST"){
       echo "POST请求---";
        //   $name = isset($_POST['name']) ? $_POST['name'] : '';
        //   $age= isset($_POST['age']) ? $_POST['age'] : 1;
        //   $remark =isset($_POST['remark']) ? $_POST['remark'] : '';
         $res = DB::insert('t_xiao_fei',["name"=>$name,"age"=>$age,'remark' =>$remark ]);
         echo "ceshi ShuChu";
        //  echo $_POST['age'];
     }else{
      echo "GET请求---";
        
     }
    
    }


    public function delete(){
      $res =  DB::delete('t_xiao_fei',["id"=>26]);
      return $res;
    }
}