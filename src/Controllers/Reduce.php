<?php

namespace DataStory\Controllers;

use DataStory\Diagram;
use DataStory\Models\Story;
use DataStory\Repositories\RouteRepository;
use Illuminate\Http\Request;

/**
 * To 'reduce' a diagram means we run it and return a sole resulting value
 */
class Reduce
{
    public function __invoke(Request $request)
    {
        $story = app(RouteRepository::class)->storyAtUri(
            $request->path()
        );
        
        $diagram = Diagram::deserialize(
            Story::where('name', $story)->first()->content
        );

        return $diagram->registerGlobal()->run()->getResult();
    }
}