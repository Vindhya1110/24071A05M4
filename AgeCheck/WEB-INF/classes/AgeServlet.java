import java.io.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/AgeServlet")
public class AgeServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String name = req.getParameter("name");
        String dob  = req.getParameter("dob"); // format: yyyy-mm-dd

        if (name != null && !name.isEmpty() &&
            dob != null && !dob.isEmpty()) {

            try {
                // Convert string to LocalDate
                LocalDate birthDate = LocalDate.parse(dob);
                LocalDate today = LocalDate.now();

                int age = Period.between(birthDate, today).getYears();

                out.println("<html><head><style>");
                out.println("body { font-family: Arial; display:flex; justify-content:center; align-items:center; height:100vh; background:#f0f0f0; }");
                out.println(".box { background:white; padding:40px; border-radius:8px; min-width:320px; }");
                out.println("</style></head><body><div class='box'>");

                out.println("<h2>Age Eligibility Result</h2>");
                out.println("<p><b>Name:</b> " + name + "</p>");
                out.println("<p><b>Age:</b> " + age + "</p>");

                if (age >= 18) {
                    out.println("<h3 style='color:green'>&#10003; Eligible</h3>");
                } else {
                    out.println("<h3 style='color:red'>&#10007; Not Eligible</h3>");
                }

                out.println("<br><a href='index.html'>Go Back</a>");
                out.println("</div></body></html>");

            } catch (Exception e) {
                out.println("<h3 style='color:red'>Invalid Date Format!</h3>");
            }

        } else {
            out.println("<h3 style='color:red'>Please fill all fields!</h3>");
        }
    }
}