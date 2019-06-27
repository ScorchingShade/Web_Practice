package docsApp;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Savenote")
public class Savenote extends HttpServlet {
	
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
		
		res.setContentType("text/html");
		PrintWriter p=new PrintWriter("D:\\Note\\note.txt");
		
		String note=req.getParameter("note");
		
		p.write(note);
		p.flush();
		p.close();
		
		
	}

}
