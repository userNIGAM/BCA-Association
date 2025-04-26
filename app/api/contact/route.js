import connectToDB from "@/lib/connectToDatabase";
import Contact from "@/models/contactModel";

export async function POST(request) {
  try {
    const res = await request.json();
    const { name, email, message } = res;
    
    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({
        status: "error",
        message: "Name, email, and message are required fields",
      }, { status: 400 });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({
        status: "error",
        message: "Please provide a valid email address",
      }, { status: 400 });
    }
    
    // Connect to database
    const db = await connectToDB();
    if (!db) {
      return Response.json({
        status: "error",
        message: "Database connection failed",
      }, { status: 500 });
    }

    // Get IP address from request headers (optional)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(/, /)[0] : request.headers.get("x-real-ip") || "Unknown";

    // Create new contact record
    const newContact = await Contact.create({
      name,
      email,
      message,
      ip,
    });

    return Response.json({
      status: "success",
      message: "Your message has been received. We'll get back to you soon!",
      data: newContact,
    }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({
      status: "error",
      message: error.message || "An error occurred while submitting your message",
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await connectToDB();
    if (!db) {
      return Response.json({
        status: "error",
        message: "Database connection failed",
      }, { status: 500 });
    }

    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return Response.json({
      status: "success",
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return Response.json({
      status: "error", 
      message: "Failed to fetch contact messages"
    }, { status: 500 });
  }
}
