function f(r0){//function(UnionType_Valid_9:msgType) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r2 = new WyJS.List([];
, new WyJS.List('void'));
            var r3 = new WyJS.Integer(11);
            var r4 = new WyJS.Record(["op", "data"], [r2, r3], new WyJS.Type.Record(["op", "data"], '{[void] data,int op}'));
            r1 = r4;//assign %1 = %4  : {[void] data,int op}
            r0 = r1;//assign %0 = %1  : {[int] data,int op}
            var r5 = f(r0);//invoke %5 = (%0) UnionType_Valid_9:f : function(UnionType_Valid_9:msgType) -> any
            var r6 = new WyJS.List([];
, new WyJS.List('void'));
            var r7 = new WyJS.Integer(11);
            var r8 = new WyJS.Record(["op", "data"], [r6, r7], new WyJS.Type.Record(["op", "data"], '{[void] data,int op}'));
            if(WyJS.equals(r5, r8, true)){
               control_flow_pc = 1905;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1905:
      }
   }
}

