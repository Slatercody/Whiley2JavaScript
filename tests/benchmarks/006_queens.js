function conflict$_9fF5Xc$3P8c0$k$$B$N2$U0FR$J6$_0FO$s5$nC$$4$j0kRh3y$Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VZ$kC$cQ$kC$12$uy2(r0, r1, r2){//function(006_queens:Pos,whiley/lang/Int:nat,whiley/lang/Int:nat) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = r0;//assign %7 = %0  : (int,int)
            var r8 = r7.tupleLoad(0);
            var r3 = r8;//assign %3 = %8  : int
            var r9 = r7.tupleLoad(1);
            var r4 = r9;//assign %4 = %9  : int
            if(WyJS.equals(r3, r1, true)){
               control_flow_pc = 167;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.equals(r4, r2, false)){
               control_flow_pc = 168;
               control_flow_repeat = true;
               continue outer;
            }
         case 167:
            var r10 = true;
            return r10;//return %10 : bool
         case 168:
            var r13 = r4.sub(r2);//sub %13 = %4, %2 : int
            var r12 = abs$Y9bFXA$W(r13);//invoke %12 = (%13) whiley/lang/Math:abs : function(int) -> int
            var r11 = r12;//assign %11 = %12  : int
            var r5 = r11;//assign %5 = %11  : int
            var r16 = r3.sub(r1);//sub %16 = %3, %1 : int
            var r15 = abs$Y9bFXA$W(r16);//invoke %15 = (%16) whiley/lang/Math:abs : function(int) -> int
            var r14 = r15;//assign %14 = %15  : int
            var r6 = r14;//assign %6 = %14  : int
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 169;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = false;
            control_flow_pc = 170;
            control_flow_repeat = true;
            continue outer;//goto label170
         case 169:
            var r17 = true;
         case 170:
            return r17;//return %17 : bool
            return;
      }
   }
}

function run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r0, r1, r2){//function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r2, r1, false)){
               control_flow_pc = 173;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = new WyJS.List([r0], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]))));
            return r8;//return %8 : [[(int,int)]]
            control_flow_pc = 174;
            control_flow_repeat = true;
            continue outer;//goto label174
         case 173:
            var r10 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r9 = r10.clone(new WyJS.Type.Void());//assign %9 = %10  : [void]
            var r3 = r9.clone(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));//assign %3 = %9  : [[(int,int)]]
            var r12 = new WyJS.Integer(0);
            var r11 = r12;//assign %11 = %12  : int
            var r4 = r11;//assign %4 = %11  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r4, r2, true)){
               control_flow_pc = 177;
               control_flow_repeat = true;
               continue outer;
            }
            var r16 = true;
            var r15 = r16;//assign %15 = %16  : bool
            var r5 = r15;//assign %5 = %15  : bool
            var r18 = new WyJS.Integer(0);
            var r17 = r18;//assign %17 = %18  : int
            var r6 = r17;//assign %6 = %17  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.gt(r6, r1, true)){
               control_flow_pc = 180;
               control_flow_repeat = true;
               continue outer;
            }
            var r23 = r0.getValue(r6);
            var r22 = r23;//assign %22 = %23  : (int,int)
            var r7 = r22;//assign %7 = %22  : (int,int)
            var r24 = conflict$_9fF5Xc$3P8c0$k$$B$N2$U0FR$J6$_0FO$s5$nC$$4$j0kRh3y$Vv$$C$H2$q$cB$m2VM$VC$12$r$sB$T0VZ$kC$cQ$kC$12$uy2(r7, r1, r4);//invoke %24 = (%7, %1, %4) 006_queens:conflict : function(006_queens:Pos,whiley/lang/Int:nat,whiley/lang/Int:nat) -> bool
            var r25 = true;
            if(r24 === r25){
               control_flow_pc = 181;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            control_flow_pc = 182;
            control_flow_repeat = true;
            continue outer;//goto label182
            control_flow_pc = 182;
            control_flow_repeat = true;
            break;
         case 181:
            var r26 = false;
            var r5 = r26;//assign %5 = %26  : bool
            control_flow_pc = 180;
            control_flow_repeat = true;
            continue outer;//goto label180
            control_flow_pc = 182;
            control_flow_repeat = true;
            break;
         case 182:
            var r27 = new WyJS.Integer(1);
            var r28 = r6.add(r27);//add %28 = %6, %27 : int
            var r6 = r28;//assign %6 = %28  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = 184;
            control_flow_repeat = true;
            break;
         case 180:
            var r29 = true;
            if(r5 === r29){
               control_flow_pc = 183;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            control_flow_pc = 184;
            control_flow_repeat = true;
            continue outer;//goto label184
            control_flow_pc = 184;
            control_flow_repeat = true;
            break;
         case 183:
            var r30 = new WyJS.Tuple([r1, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r31 = new WyJS.Tuple([r1, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r0.setValue(r1, r31);
            var r33 = new WyJS.Integer(1);
            var r34 = r1.add(r33);//add %34 = %1, %33 : int
            var r32 = run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r0, r34, r2);//invoke %32 = (%0, %34, %2) 006_queens:run : function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
            var r35 = r3.append(r32);
            var r3 = r35.clone(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));//assign %3 = %35  : [[(int,int)]]
            control_flow_pc = 184;
            control_flow_repeat = true;
            break;
         case 184:
            var r36 = new WyJS.Integer(1);
            var r37 = r4.add(r36);//add %37 = %4, %36 : int
            var r4 = r37;//assign %4 = %37  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 177:
            return r3;//return %3 : [[(int,int)]]
         case 174:
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
            var r5 = new WyJS.Integer(10);
            var r4 = r5;//assign %4 = %5  : int
            var r0 = r4;//assign %0 = %4  : int
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r6 = r7.clone(new WyJS.Type.Void());//assign %6 = %7  : [void]
            var r1 = r6.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %1 = %6  : [(int,int)]
            var r9 = new WyJS.Integer(0);
            var r8 = r9;//assign %8 = %9  : int
            var r2 = r8;//assign %2 = %8  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case -6:
            if(WyJS.gt(r2, r0, true)){
               control_flow_pc = 185;
               control_flow_repeat = true;
               continue outer;
            }
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Tuple([r10, r11], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r13 = new WyJS.List([r12], new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));
            var r14 = r1.append(r13);
            var r1 = r14.clone(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));//assign %1 = %14  : [(int,int)]
            var r15 = new WyJS.Integer(1);
            var r16 = r2.add(r15);//add %16 = %2, %15 : int
            var r2 = r16;//assign %2 = %16  : int
            control_flow_pc = -6;
            control_flow_repeat = true;
            break;
         case 185:
            var r17 = r1.length();//lengthof %17 = %1 : [(int,int)]
            if(WyJS.equals(r17, r0, true)){
               control_flow_pc = 186;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 186:
            var r20 = new WyJS.Integer(0);
            var r19 = run$b9fF5esNBV$62IAWE$sD$F2Vo$VC$92Vw$s4$N2Vk$kC$D2VM$78$R2$u5$R2Vk$ViAoHF2$V0$N$k5$y1Vs$cD$92Vm$kC$aQ$$9$T2VtD(r1, r20, r0);//invoke %19 = (%1, %20, %0) 006_queens:run : function([006_queens:Pos],whiley/lang/Int:nat,int) -> [[006_queens:Pos]]
            var r18 = r19.clone(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));//assign %18 = %19  : [[(int,int)]]
            var r3 = r18.clone(new WyJS.Type.List(new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()])));//assign %3 = %18  : [[(int,int)]]
            return;
      }
   }
}

