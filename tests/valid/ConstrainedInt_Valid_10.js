function f(r0){//function(ConstrainedInt_Valid_10:num) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0;//assign %2 = %0  : int
            var r1 = r2;//assign %1 = %2  : int
            return r1;//return %1 : int
      }
   }
}

function g(r0, r1){//function(int,ConstrainedInt_Valid_10:nat) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = f(r1);//invoke %2 = (%1) ConstrainedInt_Valid_10:f : function(ConstrainedInt_Valid_10:num) -> int
            return r2;//return %2 : int
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = 3;//const %2 = 3 : int
            var r0 = g(r1, r2);//invoke %0 = (%1, %2) ConstrainedInt_Valid_10:g : function(int,ConstrainedInt_Valid_10:nat) -> int
            var r3 = 3;//const %3 = 3 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label2340 : int
               control_flow_pc = 2340;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2340:
      }
   }
}

test();