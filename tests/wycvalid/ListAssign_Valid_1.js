function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1;//const %3 = 1 : int
            var r4 = 2;//const %4 = 2 : int
            var r5 = 3;//const %5 = 3 : int
            var r6 = [r3, r4, r5];
            var r2 = r6;//assign %2 = %6  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r7 = r0;//assign %7 = %0  : [int]
            var r1 = r7;//assign %1 = %7  : [int]
            var r8 = 2;//const %8 = 2 : int
            var r9 = 2;//const %9 = 2 : int
            var r10 = 2;//const %10 = 2 : int
            r1[r9] = r10;//update %1[%9] = %10 : [int] -> [int]
            var r11 = 2;//const %11 = 2 : int
            var r12 = r1[r11];
            var r13 = r0.length;//lengthof %13 = %0 : [int]
            if(r12  !=  r13){//ifne %12, %13 goto label2 : int
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r14 = 1;//const %14 = 1 : int
            var r15 = 2;//const %15 = 2 : int
            var r16 = 3;//const %16 = 3 : int
            var r17 = [r14, r15, r16];
            if(r0.length ==  r17.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r17[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %0, %17 goto label3 : [int]
                  control_flow_pc = 3;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r18 = 1;//const %18 = 1 : int
            var r19 = 2;//const %19 = 2 : int
            var r20 = 2;//const %20 = 2 : int
            var r21 = [r18, r19, r20];
            if(r1.length ==  r21.length){
               var listComp = true;
               for(var i = 0; i<r1.length;i++){
                  if(r1[i]  !=  r21[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){//ifeq %1, %21 goto label4 : [int]
                  control_flow_pc = 4;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
      }
   }
}

test();