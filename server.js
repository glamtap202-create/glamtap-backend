const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();


// ================= IMPORT ROUTES =================

const userRoutes = require("./routes/userRoutes");
const salonRoutes = require("./routes/salonRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const beauticianRoutes = require("./routes/beauticianRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const addressRoutes = require("./routes/addressRoutes");
const cartRoutes = require("./routes/cartRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const bannerRoutes=require("./routes/bannerRoutes");
const brandRoutes=require("./routes/brandRoutes");
const featureRoutes=require("./routes/featureRoutes");
const statsRoutes=require("./routes/statsRoutes");
const comboRoutes = require("./routes/comboRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const settlementRoutes = require("./routes/settlementRoutes");
const couponRoutes = require("./routes/couponRoutes");
const supportTicketRoutes = require("./routes/supportTicketRoutes");
const cmsRoutes = require("./routes/cmsRoutes");
// ... existing imports ke saath
const settingsRoutes = require("./routes/settingsRoutes");
// ... existing imports ke saath

// ... existing app.use lines ke saath
const roleRoutes = require("./routes/roleRoutes");
// ... existing imports ke saath
const activityLogRoutes = require("./routes/activityLogRoutes");
// ... existing imports ke saath

app.use("/api/activity-logs", activityLogRoutes);
// ... existing app.use lines ke saath
app.use("/api/roles", roleRoutes);
// ... existing app.use lines ke saath
app.use("/api/cms", cmsRoutes);
// ... existing app.use lines ke saath
app.use("/api/coupons", couponRoutes);
app.use("/api/settlements", settlementRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/support-tickets", supportTicketRoutes);

// ... existing imports ke saath

app.use("/api/settings", settingsRoutes);
// ... existing app.use lines ke saath



// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());


// ================= IMAGE STATIC FOLDER =================

app.use(
  "/images",
  express.static(path.join(__dirname, "images"))
);



// ================= HOME ROUTE =================

app.get("/", (req,res)=>{

  res.send("API is working 🚀");

});




// ================= TEST ROUTE =================

app.get("/api/test",(req,res)=>{

  res.json({

    success:true,
    message:"API Test Working"

  });

});




// ================= API ROUTES =================

app.use("/api/users", userRoutes);

app.use("/api/salons", salonRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/beauticians", beauticianRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/addresses", addressRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/reviews", reviewRoutes);

app.use("/api/checkout", checkoutRoutes);

app.use("/api/banners",bannerRoutes);
app.use("/api/brands",brandRoutes);
app.use("/api/features",featureRoutes);
app.use("/api/stats",statsRoutes);


app.use("/api/combos", comboRoutes);


// ================= DATABASE + SERVER =================


const PORT = process.env.PORT || 5000;


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{


  console.log("✅ MongoDB Connected");


  app.listen(PORT,()=>{

    console.log(`🚀 Server running on port ${PORT}`);

  });


})
.catch((err)=>{


  console.log(
    "❌ MongoDB Connection Error:",
    err.message
  );


});