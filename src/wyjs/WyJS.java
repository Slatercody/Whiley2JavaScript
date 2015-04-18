package wyjs;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

import wyil.io.WyilFilePrinter;
import wyil.io.WyilFileReader;
import wyil.lang.Codes;
import wyil.lang.Type;
import wyil.lang.WyilFile;
import wyil.lang.WyilFile.Block;
import wyil.lang.WyilFile.FunctionOrMethod;

public class WyJS {

	private WyilFile file;
	private int indent = 0;
	//Sorted list of strings that make up the javascript file
	private ArrayList<String> js;

	public WyJS(WyilFile file) {
		this.file = file;
		ArrayList<Block> blocks = new ArrayList<Block>(file.blocks());
		js = new ArrayList<String>();
		for (Block f : blocks) {
			write(f);
		}
	}
	


	private void write(Block e){
		
		if(e instanceof FunctionOrMethod){
			FunctionOrMethod func = (FunctionOrMethod) e;
			StringBuilder str = new StringBuilder();
			str.append(getIndentBlock() + "function " + func.name() + "(");
			int i = 1;
			for(Type t : func.type().params()){
				if(i==1){
					str.append("r" + (i-1));
				}else{
					str.append(", r" + (i-1));
				}
				i++;
			}
			str.append("){//" + func.type().toString() +"\n");
			js.add(str.toString());
			indent++;
			Iterator iter = func.body().iterator();
			while(iter.hasNext()){
				Object tmp = iter.next();
				write(tmp);
			}
			indent--;
			js.add(getIndentBlock() + "}");
			
			for(String s: js){
				System.out.print(s);
			}
		}
	}
	
	private void write(Object o){
		if(o instanceof Codes.Const){
			write((Codes.Const) o);
		}else if(o instanceof Codes.BinaryOperator){
			write((Codes.BinaryOperator) o);
		}else if(o instanceof Codes.Assign){
			write((Codes.Assign) o);
		}else if(o instanceof Codes.Return){
			write((Codes.Return) o);
		}else{
			System.out.println("Unknown object " + o.getClass());
		}
	}
	
	private void write(Codes.Const o){
		js.add(getIndentBlock() + "var r" + o.target() + " = " + o.constant + ";//" + o.toString() +"\n");
	}
	
	private void write(Codes.BinaryOperator o){
		js.add(getIndentBlock() + "var r" + o.target() + " = ");
		if(o.kind == Codes.BinaryOperatorKind.ADD){
			js.add("r" + o.operand(0) + " + " + "r" + o.operand(1) + ";//" + o.toString() +"\n");
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEAND){
			System.out.println("Cant do BitWiseAnd");
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEOR){
			System.out.println("Cant do BitWiseOr");
		}else if(o.kind == Codes.BinaryOperatorKind.BITWISEXOR){
			System.out.println("Cant do BitWiseXOR");
		}else if(o.kind == Codes.BinaryOperatorKind.DIV){
			js.add("r" + o.operand(0) + " / " + "r" + o.operand(1) + ";//" + o.toString() +"\n");
		}else if(o.kind == Codes.BinaryOperatorKind.LEFTSHIFT){
			System.out.println("Cant do LeftShift");
		}else if(o.kind == Codes.BinaryOperatorKind.MUL){
			js.add("r" + o.operand(0) + " * " + "r" + o.operand(1) + ";//" + o.toString() +"\n");
		}else if(o.kind == Codes.BinaryOperatorKind.RANGE){
			System.out.println("Cant do Range");
		}else if(o.kind == Codes.BinaryOperatorKind.REM){
			System.out.println("Cant do REM");
		}else if(o.kind == Codes.BinaryOperatorKind.RIGHTSHIFT){
			System.out.println("Cant do RightShift");
		}else if(o.kind == Codes.BinaryOperatorKind.SUB){
			js.add("r" + o.operand(0) + " - " + "r" + o.operand(1) + ";//" + o.toString() +"\n");
		}else {
			System.out.println("Unknown kind");
		}
	}
	
	private void write(Codes.Return o){
		if(o.operand!=-1){
			js.add(getIndentBlock() + "return r" + o.operand + ";//" + o.toString() +"\n");
		}
	}
	
	private void write(Codes.Assign o){
		js.add(getIndentBlock() + "var r" + o.target() + " = r" + o.operand(0) + ";//" + o.toString() +"\n");
	}
	
	private String getIndentBlock(){
		String str = "";
		for(int i = 0; i < indent; i++){
			str+="   ";
		}
		return str;
	}

	public static void main(String[] args) {
		try {
			// First, read the WyIL file specified on the command-line.
			WyilFileReader r = new WyilFileReader(args[0]);
			WyilFile wyilFile = r.read();
			// Second, print out its contents (for now, though this should be
			// changed)
			WyilFilePrinter printer = new WyilFilePrinter(System.out);
			printer.apply(wyilFile);
			
			//Make the javascript file
			
			WyJS wy = new WyJS(wyilFile);
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
}