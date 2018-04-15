<?php
defined('BASEPATH') OR exit('No direct script access allowed');


use QCloud_WeApp_SDK\Mysql\Mysql as DB;


class Card extends CI_Controller {
    public function index() {
     
       echo "This is Cards API!";
		  

    }

    public function getAll(){
        $rows = DB::select('t_cards', ['*']);

        $this->json([
        'code' => 1,
        'data' => $rows
        ]);

    }


    public function update(){
       if($_SERVER["REQUEST_METHOD"] == "PUT"){
         $res = DB::update('t_cards' ,['remark' => "new name2","yin_hang"=>'工商'] ,['id'=>3]);
         echo "this is Card->update";
         echo $res;

       }
        
        // echo DB::last_query();
    }




    public function create(){
     if($_SERVER["REQUEST_METHOD"] == "POST"){
       echo "POST请求---";
          $card_no = $this->input->post('card_no');
          $yin_hang= $this->input->post('yin_hang');
          $zhang_dan_ri = $this->input->post('zhang_dan_ri');
          $huan_kuan_ri =$this->input->post('huang_kuan_ri');
          $e_du = $this->input->post("e_du");
          $chi_ka_ren = $this->input->post('chi_ka_ren');
          $remark =$this->input->post("remark");
          $res = DB::insert('t_cards',["card_no"=>$card_no,"yin_hang"=>$yin_hang, "chi_ka_ren" => $chi_ka_ren, "zhang_dan_ri" => $zhang_dan_ri, "e_du" => $e_du, "huan_kuan_ri" => $huan_kuan_ri,'remark' =>$remark ]);
          // echo "ceshi ShuChu";
        //  echo $_POST['age'];
     }else{
      echo "GET请求---";
        
     }
    
    }


    public function delete(){
      $res =  DB::delete('cTest',["id"=>26]);
      return $res;
    }
}