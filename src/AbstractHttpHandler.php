<?php

abstract class AbstractHttpHandler
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
    protected function jsonResponse($data)
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
    protected function htmlResponse($path)
    {
        header('Content-Type: text/html');

        echo file_get_contents($path);
        die;
    }

    /**
     * handle method
     *
     * @return mixed
     */
    abstract public function handle();
}