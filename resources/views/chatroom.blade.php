@extends('layouts.app')

@section('content')
    <div class="container">
        <chat-log :messages="messages"></chat-log>
       <chat-composer @messagecreated="saveMessage"></chat-composer>
    </div>
@endsection
