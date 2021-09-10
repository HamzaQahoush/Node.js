## how web works

user send request to webapp then lookfor it domain lookup.

HTTP :Hyper text Transfter protocol ,

HTTPS : Hyper text Transfter protocol secure

- eventloop : keep running as there are event listener registred. single js thread.
  running and execute , its does multi threading .

## event loop work flow :

<img src='images/eventloop workflow.png'>
1. check timers

2. callbacks : execute I/O

3. Poll : look for new I/O events , excute thier callbacks
4. close callbacks.

## how single thread and handling multi request?

- event loop starts with programm start (responsible for handling callbacks) FAST finishing code.

- worker pool for heavy lifting : run on different threads. (like files) , aftet worker done it trigger the callback for that read file operation.
