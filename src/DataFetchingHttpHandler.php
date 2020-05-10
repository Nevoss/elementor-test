<?php

class DataFetchingHttpHandler extends AbstractHttpHandler
{
    /**
     * Just lorem ipsum data
     *
     * @var string
     */
    protected $data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis laoreet erat, eget volutpat dui rutrum eget. Sed non ante sit amet ex accumsan sollicitudin in ac felis. Aliquam tempus lorem nisl. Phasellus eleifend erat vel suscipit aliquet. Donec ornare facilisis orci, quis placerat libero pellentesque ac. Curabitur ullamcorper odio eu nulla lobortis egestas. Phasellus et ex metus. Ut id luctus metus. Donec ac consequat mauris. Nam dignissim elementum nisi quis ultricies. Praesent blandit neque nec blandit sollicitudin. Aenean dignissim euismod lectus a vehicula.';

    /**
     * returns json response to client with lorem ipsum data
     *
     * @return mixed|void
     */
    public function handle()
    {
        $this->jsonResponse(['data' => $this->data]);
    }
}