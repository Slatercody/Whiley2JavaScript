function BTree$Y9_FP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$FI0VF$F4$m0FO$J53y(){//function() -> Complex_Valid_4:BTree
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = null;
            return r0;//return %0 : X<null|{int item,X left,X right}>
            return;
      }
   }
}

function add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r1){//function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 1579;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1580;
            control_flow_repeat = true;
            continue outer;//goto label1580
         case 1579:
            var r2 = null;
            var r3 = null;
            var r4 = new WyJS.Record(["item", "left", "right"], [r1, r2, r3], new WyJS.Type.Record(["item", "left", "right"], [new WyJS.Type.Int(), new WyJS.Type.Null(), new WyJS.Type.Null()]));
            var r0 = r4.clone();//assign %0 = %4  : {int item,null left,null right}
            control_flow_pc = 1581;
            control_flow_repeat = true;
            continue outer;//goto label1581
         case 1580:
            var r5 = r0.fieldLoad("item");//fieldload %5 = %0 item : X<{int item,X|null left,X|null right}>
            if(WyJS.gt(r1, r5, true)){
               control_flow_pc = 1582;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.fieldLoad("left");//fieldload %7 = %0 left : X<{int item,X|null left,X|null right}>
            var r6 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r7, r1);//invoke %6 = (%7, %1) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r9 = r0.fieldLoad("left");//fieldload %9 = %0 left : X<{int item,X|null left,X|null right}>
            var r8 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r9, r1);//invoke %8 = (%9, %1) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            r0.setValue("left", r8);
            control_flow_pc = 1581;
            control_flow_repeat = true;
            continue outer;//goto label1581
         case 1582:
            var r11 = r0.fieldLoad("right");//fieldload %11 = %0 right : X<{int item,X|null left,X|null right}>
            var r10 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r11, r1);//invoke %10 = (%11, %1) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r13 = r0.fieldLoad("right");//fieldload %13 = %0 right : X<{int item,X|null left,X|null right}>
            var r12 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r13, r1);//invoke %12 = (%13, %1) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            r0.setValue("right", r12);
         case 1581:
            return r0;//return %0 : X<null|{int item,X left,X right}>
            return;
      }
   }
}

function contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r1){//function(Complex_Valid_4:BTree,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 1583;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1584;
            control_flow_repeat = true;
            continue outer;//goto label1584
         case 1583:
            var r2 = false;
            return r2;//return %2 : bool
            control_flow_pc = 1585;
            control_flow_repeat = true;
            continue outer;//goto label1585
         case 1584:
            var r3 = r0.fieldLoad("item");//fieldload %3 = %0 item : X<{int item,X|null left,X|null right}>
            if(WyJS.equals(r3, r1, false)){
               control_flow_pc = 1586;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = true;
            return r4;//return %4 : bool
            control_flow_pc = 1585;
            control_flow_repeat = true;
            continue outer;//goto label1585
         case 1586:
            var r5 = r0.fieldLoad("item");//fieldload %5 = %0 item : X<{int item,X|null left,X|null right}>
            if(WyJS.gt(r1, r5, true)){
               control_flow_pc = 1587;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = r0.fieldLoad("left");//fieldload %7 = %0 left : X<{int item,X|null left,X|null right}>
            var r6 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r7, r1);//invoke %6 = (%7, %1) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            return r6;//return %6 : bool
            control_flow_pc = 1585;
            control_flow_repeat = true;
            continue outer;//goto label1585
         case 1587:
            var r9 = r0.fieldLoad("right");//fieldload %9 = %0 right : X<{int item,X|null left,X|null right}>
            var r8 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r9, r1);//invoke %8 = (%9, %1) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            return r8;//return %8 : bool
         case 1585:
            return;
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
            var r2 = BTree$Y9_FP8w0$20kQ$o5$k0$Q$J5$s0kM$N4$W0$Q$Z5$Z0kM$FI0VF$F4$m0FO$J53y();//invoke %2 = () Complex_Valid_4:BTree : function() -> Complex_Valid_4:BTree
            var r1 = r2;//assign %1 = %2  : X<null|{int item,X left,X right}>
            var r0 = r1;//assign %0 = %1  : X<null|{int item,X left,X right}>
            var r4 = new WyJS.Integer(1);
            var r3 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r4);//invoke %3 = (%0, %4) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r3;//assign %0 = %3  : X<null|{int item,X left,X right}>
            var r6 = new WyJS.Integer(2);
            var r5 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r6);//invoke %5 = (%0, %6) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r5;//assign %0 = %5  : X<null|{int item,X left,X right}>
            var r8 = new WyJS.Integer(3);
            var r7 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r8);//invoke %7 = (%0, %8) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r7;//assign %0 = %7  : X<null|{int item,X left,X right}>
            var r10 = new WyJS.Integer(4);
            var r9 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r10);//invoke %9 = (%0, %10) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r9;//assign %0 = %9  : X<null|{int item,X left,X right}>
            var r12 = new WyJS.Integer(5);
            var r11 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r12);//invoke %11 = (%0, %12) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r11;//assign %0 = %11  : X<null|{int item,X left,X right}>
            var r14 = new WyJS.Integer(6);
            var r13 = add$Z9dFXd_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOFs1E(r0, r14);//invoke %13 = (%0, %14) Complex_Valid_4:add : function(Complex_Valid_4:BTree,int) -> Complex_Valid_4:BTree
            var r0 = r13;//assign %0 = %13  : X<null|{int item,X left,X right}>
            var r16 = new WyJS.Integer(5);
            var r15 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r16);//invoke %15 = (%0, %16) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r17 = true;
            if(r15 === r17){
               control_flow_pc = 1588;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1588:
            var r19 = new WyJS.Integer(4);
            var r18 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r19);//invoke %18 = (%0, %19) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r20 = true;
            if(r18 === r20){
               control_flow_pc = 1589;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1589:
            var r22 = new WyJS.Integer(6);
            var r21 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r22);//invoke %21 = (%0, %22) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r23 = true;
            if(r21 === r23){
               control_flow_pc = 1590;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1590:
            var r25 = new WyJS.Integer(3);
            var r24 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r25);//invoke %24 = (%0, %25) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r26 = true;
            if(r24 === r26){
               control_flow_pc = 1591;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1591:
            var r28 = new WyJS.Integer(7);
            var r27 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r28);//invoke %27 = (%0, %28) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r29 = false;
            if(r27 === r29){
               control_flow_pc = 1592;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1592:
            var r31 = new WyJS.Integer(2);
            var r30 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r31);//invoke %30 = (%0, %31) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r32 = true;
            if(r30 === r32){
               control_flow_pc = 1593;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1593:
            var r34 = new WyJS.Integer(8);
            var r33 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r34);//invoke %33 = (%0, %34) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r35 = false;
            if(r33 === r35){
               control_flow_pc = 1594;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1594:
            var r37 = new WyJS.Integer(1);
            var r36 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r37);//invoke %36 = (%0, %37) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r38 = true;
            if(r36 === r38){
               control_flow_pc = 1595;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1595:
            var r40 = new WyJS.Integer(9);
            var r39 = contains$_9dF5X1Fc_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0$C4$10$K$76$_0FOMs(r0, r40);//invoke %39 = (%0, %40) Complex_Valid_4:contains : function(Complex_Valid_4:BTree,int) -> bool
            var r41 = false;
            if(r39 === r41){
               control_flow_pc = 1596;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1596:
            return;
      }
   }
}

