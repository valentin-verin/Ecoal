<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Artist;
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
            'content' => 'Hello from ecoal Nice to see you in Lens. Enjoy !',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ]);

        $article2 = Article::create([
            'title' => 'Michael Jackson: King of Pop',
            'content' => 'Hello from MJ Nice to see you in USA. Enjoy !',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ]);

        $artist = Artist::create([
            'name' => 'Michael Jackson',
            'birth' => '1958-08-29',
            'death' => '',
            'nation' => 'USA',
        ]);

        $rap = Tag::create(['name' => 'Rap']);
        $rock = Tag::create(['name' => 'Rock']);
        $metal = Tag::create(['name' => 'Metal']);
        $rnb = Tag::create(['name' => 'RnB']);
        $techno = Tag::create(['name' => 'Techno']);
        $pop = Tag::create(['name' => 'Pop']);

        $article2->tags()->attach($pop->id);
    }
}
