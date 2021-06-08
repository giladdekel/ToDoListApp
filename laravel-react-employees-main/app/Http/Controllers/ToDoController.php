<?php

namespace App\Http\Controllers;

use App\Models\ToDo;
use Illuminate\Http\Request;

class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        // $to_dos = ToDo::all();
        // $this->response()->json(["message" => "success", $to_dos],200);



  

        $to_dos = ToDo::all();
        return response()->json(["status" => "success", "error" => false, "count" => count($to_dos), "data" => $to_dos],200);




    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */




    public function store(Request $request){
		// $validatedData = $request->validate(['title' => 'required']);
		$to_dos = ToDo::create([
			// 'title' => $validatedData['title'],
             'text' => $request->Text,
             'description' => $request->Description,
			 'done' => $request->Done,
        ]);
  
//   TaskID: 1,
//           FirstName: "ToDo.FirstName",
//           LastName: "ToDo.LastName",
//           Title: "ToDo.Title",


		return $to_dos->toJson();
	}






 
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ToDo  $task
     * @return \Illuminate\Http\Response
     */
    public function show(ToDo $task)
    {
        //
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ToDo  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ToDo $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ToDo  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(ToDo $task)
    {
        //
    }
}
