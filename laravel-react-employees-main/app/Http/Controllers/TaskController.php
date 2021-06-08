<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        // $tasks = Task::all();
        // $this->response()->json(["message" => "success", $tasks],200);



  

        $tasks = Task::all();
        return response()->json(["status" => "success", "error" => false, "count" => count($tasks), "data" => $tasks],200);




    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */




    public function store(Request $request){
		// $validatedData = $request->validate(['title' => 'required']);
		$tasks = Task::create([
			// 'title' => $validatedData['title'],
             'text' => $request->text,
            //  'description' => $request->Description,
			 'done' => $request->done,
        ]);
  
//   TaskID: 1,
//           FirstName: "Task.FirstName",
//           LastName: "Task.LastName",
//           Title: "Task.Title",


		return $tasks->toJson();
	}






 
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //

        $task->done = !($task->done);
        $task->update();

        return response()->json('Task updated!');


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
    
       $task->delete();
       return response()->json([]);


    }
}
