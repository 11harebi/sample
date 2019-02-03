$(function(){
 for(i = 0; i < 2; i++){
    $('#piano-canvas')
    //白鍵の描写
    .drawRect({//C
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//D
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 20 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//E
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 40 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//F
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 60 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//G
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 80 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//A
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 100 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    .drawRect({//B
      strokeStyle: 'black', strokeWidth: 2,
      x: 2, y: 2 + 120 + (140 * i), width:  50, height: 20,
      cornerRadius: 3
    })
    //黒鍵の描写
    .drawRect({//C#
      strokeStyle: 'black', strokeWidth: 2, fillStyle: 'green',
      x: 2, y: 2 + 15 + (140 * i), width:  25, height: 10,
      cornerRadius: 3
    })
    .drawRect({//D#
      strokeStyle: 'black', strokeWidth: 2, fillStyle: 'green',
      x: 2, y: 2 + 35 + (140 * i), width:  25, height: 10,
      cornerRadius: 3
    })
    .drawRect({//F#
      strokeStyle: 'black', strokeWidth: 2, fillStyle: 'green',
      x: 2, y: 2 + 75 + (140 * i), width:  25, height: 10,
      cornerRadius: 3
    })
    .drawRect({//G#
      strokeStyle: 'black', strokeWidth: 2, fillStyle: 'green',
      x: 2, y: 2 + 95 + (140 * i), width:  25, height: 10,
      cornerRadius: 3
    })
    .drawRect({//A#
      strokeStyle: 'black', strokeWidth: 2, fillStyle: 'green',
      x: 2, y: 2 + 115 + (140 * i), width:  25, height: 10,
      cornerRadius: 3
    });
  }
});
