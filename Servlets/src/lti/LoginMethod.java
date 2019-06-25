package lti;
import javax.servlet.http.*;
import javax.servlet.*;
import javax.servlet.annotation.*;

import java.io.*;

@WebServlet("/LoginMethod")
public class LoginMethod extends HttpServlet{
	
   
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		
		response.setContentType("text/html");  
	    PrintWriter out = response.getWriter();  
	          
	    String n=request.getParameter("uname");  
	    String p=request.getParameter("pword");  
	    
	    if(p.equals("lti")){
	    	
	    	String title = "Login";
		      String docType =
		         "<!doctype html public \"-//w3c//dtd html 4.0 " + "transitional//en\">\n";

		      out.println(docType +
		         "<html>\n" + "<head><title>Login</title></head>\n" +
		            "<body bgcolor = \"#f0f0f0\">\n" +
		               "<h1 align = \"center\">Login Done!</h1>\n" +n+ "\nYour password is correct.\n</body> </html>");
	    }
	    
	    else{
	    	
	    	  out.println("Sorry UserName or Password Error!");  
	          RequestDispatcher rd=request.getRequestDispatcher("/login.html");  
	          rd.include(request, response);  
	                        
	    }
	    
	}
		
		
	

}
