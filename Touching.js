function touching(obj1,obj2){
      if (obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
       obj1.velocityX=0
       obj1.velocityY=0
       return true;
      }
      else{
        return false;
      }
}
















