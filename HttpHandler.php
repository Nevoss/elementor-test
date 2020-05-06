<?php

class HttpHandler
{
    /**
     * hold the $_GET data
     *
     * @var array
     */
    protected $query;

    /**
     * holds the $_POST data
     *
     * @var array
     */
    protected $request;

    /**
     * HttpHandler constructor.
     *
     * @param array $query
     * @param array $request
     */
    public function __construct(array $query = [], array $request = [])
    {
        $this->query = $query;
        $this->request = $request;
    }

    /**
     * returns a json response
     *
     * @param $data
     */
    public function jsonResponse($data)
    {
        header('Content-Type: application/json');

        echo json_encode($data);
        die;
    }

    /**
     * returns a html as response
     *
     * @param $path
     */
    public function htmlResponse($path)
    {
        header('Content-Type: text/html');

        echo file_get_contents($path);
        die;
    }
}