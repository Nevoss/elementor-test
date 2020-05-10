<?php

class IndexPageHttpHandler extends AbstractHttpHandler
{
    /**
     * serve the index.html file.
     *
     * @return mixed|void
     */
    public function handle()
    {
        $this->htmlResponse('./assets/index.html');
    }
}