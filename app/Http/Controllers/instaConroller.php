<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\utilisateur;
class instaConroller extends Controller
{
   
    public function index()
    {
        return view('Categories');
    }

    public function singers()
    {
        $singers = utilisateur::where('category','singer')->get();
        return $singers;
    }
    public function sportifs()
    {
        $sportifs = utilisateur::where('category','sport')->get();
        return $sportifs;
    }
    
    public function Liste()
    {
        $influenceurs = utilisateur::all();
        return $influenceurs;
    }
    public function Profile(Request $name){
        $user = utilisateur::where('name',$name->name)->get();
        return $user;
    }

    public function create(Request $request)
    {
        $influenseur = new utilisateur();
        $influenseur->name = $request->name;
        $influenseur->category = $request->category;
        $influenseur->imageUrl = $request->imageUrl;
        $influenseur->followers = $request->followers;
        $influenseur->follows = $request->follows;
        $influenseur->posts = $request->posts;
        $influenseur->bio = $request->bio;
        $influenseur->fullName = $request->fullName;  
        $influenseur->save();
        return redirect('/');
    }
    public function destroy($name)
    {
        utilisateur::where('name',$name)->delete();
        return redirect('/');
    }

  
    private function validate_request()
    {
        return request()->validate([
            'name'=>'required',
            'category'=>'required',
        ]);
    }







    //temporaiement
    public function Sport(){
            return view('Sport');
    }
    public function Singer(){
        return view('Singer');
    }
    
}

