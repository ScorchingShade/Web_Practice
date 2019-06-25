package lti;
import javax.servlet.http.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;

import java.io.*;
import java.util.Enumeration;

@WebServlet("/Hello")
public class Hello extends HttpServlet{
	

	
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
		
		
		String name=req.getParameter("uname");
		res.setContentType("text/html");
		Serve3 s=new Serve3(name);
		
		
		
		
		s.doGet(req, res);
		
		
		
		
		
		
		//PrintWriter p = res.getWriter();
		
		//Serve2 s1=new Serve2(name);
		
		//s1.doGet(req, res);
		//ServletConfig s = getServletConfig();
		/*String[] str = new String[20];
		int a=0;
		Enumeration<String> e = s.getInitParameterNames();
	
			str[a] = s.getInitParameter("name");
			p.println("<h1>"+str[a]+"&nbsp;&nbsp");
			str[a+1]=s.getInitParameter("name1");
			p.println("<h1>"+str[a+1]+"&nbsp;&nbsp");
			a++;
			
		*/
		
	}

	

}
