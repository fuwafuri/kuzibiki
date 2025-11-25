/*var random = Math.random();
if (0.001 >= random) {
  window.open("");//吉外
}else if(0.01 >= ramdom){
    window.open("");//大吉最高レア
}else if(0.03 >= random){
    if (Math.random() < 0.5) {//大吉中レア
        window.open("");
    }else{
        window.open("");//大吉最低レア
    }
}else if(0.23 >= random){
    var random2 = Math.random();
    if(random2 < 0.6){
        window.open("");//中吉
    }else if(random2 < 0.3){
        window.open("");//小吉
    }else{
        window.open("");//大凶
    }
}else {
    var random3 = Math.random();
    if(ramdom3 < 0.1){
        window.open("a");//凶
    }else if(random3 < 0.2){
        window.open("a");//↓全部はずれ
    }else if(random3 < 0.3){
        window.open("a");
    }else if(random3 < 0.4){
        window.open("a");
    }else if(random3 < 0.5){
        window.open("a");
    }else if(random3 < 0.6){
        window.open("a");
    }else if(random3 < 0.7){
        window.open("a");
    }else if(random3 < 0.8){
        window.open("a");
    }else if(random3 < 0.9){
        window.open("a");
    }else{
        window.open("a");
    }
}*/
var random = Math.random();

if (random < 0.001) {
  window.open(""); // 吉外（超激レア）
} else if (random < 0.01) {
  window.open("https://fuwafuri.github.io/kuzibiki/kekkasaikourea.html"); // 大吉（最高レア）
} else if (random < 0.03) {
  if (Math.random() < 0.5) {
    window.open(""); // 大吉（中レア）
  } else {
    window.open(""); // 大吉（最低レア）
  }
} else if (random < 0.23) {
  var random2 = Math.random();
  if (random2 < 0.3) {
    window.open(""); // 中吉
  } else if (random2 < 0.6) {
    window.open(""); // 小吉
  } else {
    window.open(""); // 大凶
  }
} else {
  var random3 = Math.random();
  if (random3 < 0.1) {
    window.open("a"); // 凶
  }else if(random3 < 0.2){
    window.open("a"); 
  }else if(random3 < 0.3){
    window.open("a"); 
  }else if(random3 < 0.4){
    window.open("a"); 
  }else if(random3 < 0.5){
    window.open("a"); 
  }else if(random3 < 0.6){
    window.open("a"); 
  }else if(random3 < 0.7){
    window.open("a"); 
  }else if(random3 < 0.8){
    window.open("a"); 
  }else if(random3 < 0.9){
    window.open("a"); 
  }else{
    window.open("a");
  }
}