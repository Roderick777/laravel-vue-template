<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <uk-card padding="10px" id="nav">
            <i class="uk-icon-button" uk-icon="menu" uk-toggle="target: #menu-principal"></i>
        </uk-card>
        <uk-menu></uk-menu>

        <main class="py-4">
            <vue-page-transition name="fade-in-right">
                <router-view/>
            </vue-page-transition>
        </main>
    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
