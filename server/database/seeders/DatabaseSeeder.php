<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $article = Article::create([
            'title' => 'Welcome to ecoal23',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ]);

        $tags = [['name' => 'Rap'],
                ['name' => 'Jazz'],
                ['name' => 'Rock'],
                ['name' => 'Metal'],
                ['name' => 'RnB'],
                ['name' => 'Techno']];

        foreach($tags as $tag){
            $article->tags()->attach([Tag::create($tag)->id]);
        }        
    }
}
