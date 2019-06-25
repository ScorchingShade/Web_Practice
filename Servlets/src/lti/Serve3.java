package lti;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Serve3")
public class Serve3 extends HttpServlet {
String name;
	
	Serve3(String name){
		this.name=name;
	}
		
	Serve3(){}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Serve3 s=new Serve3();
		
		PrintWriter out = response.getWriter();
	      String title = "Communicating data";
	      String docType =
	         "<!doctype html public \"-//w3c//dtd html 4.0 " + "transitional//en\">\n";

	      out.println(docType +
	         "<html>\n" + "<head><title>Comm</title></head>\n" +
	            "<body bgcolor = \"#f0f0f0\">\n" +
	               "<h1 align = \"center\">Communication Done!</h1>\n" +name+ "</body> </html>");
		
	}

	

}
