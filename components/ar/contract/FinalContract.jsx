"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import axios from "axios";
import urlsList from "@/public/data/urlsList.json";

const FinalContract = () => {
  const [contractNumber, setContractNumber] = useState();

  const personalInformation = useSelector(
    (state) => state.contract.personalInformation
  );

  const productDetails = useSelector((state) => state.contract.productDetails);
  const totalPrice = useSelector((state) => state.contract.totalPrice);
  const discount = useSelector((state) => state.contract.discount);

  const date = new Date();

  const currentDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  const expiryYear = new Date();
  expiryYear.setFullYear(expiryYear.getFullYear() + 1);

  const expiryDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${expiryYear.getFullYear()} `;
  const points = [
    `1. تكون الصيانة لمدة سنة ميلادية وتبدأ من تاريخ ${currentDate} وتنتهي بتاريخ
 ${expiryDate}.`,
    `2. تكلفة الزيارة (750) سبعمائة وخمسين ریال غير شامل الضريبة تدفع مقدما.`,
    `3. يقوم الطرف الأول بإبلاغ الطرف الثاني بالقطع التالفة أو الغير صالحة للاستعمال.`,
    `4. الطرف الأول غير مسئول عن أي إضافات جديدة على النظام الموجود.`,
    `5. إذا لم يؤمن الطرف الثاني القطع المطلوبة يتحمل المســئـوليــة ويكون الطرف الأول غيــر مسئول عن
الأضرار وعن سوء استخدام النظام.`,
    `6. لا يشمل عقد الصيانة الأعطال الكهربائية أو ما ينتج عنها من أضرار.`,
    `7. يقر الطرف الثاني بأن الأعداد والكميات وجميع المعلومات الموضح في الجدول أعلاه صحيـحـة ويـتحمل مسئولية أى خطأ تم عند إدخاله هذه البيانات.`,
    `8. يقوم الطرف الثاني بإرسال طلبات الصيانة بشكل رسمي او الكتروني عبر الوسائل التالية
جوال ( 00966581077506 ) بريد الكتروني ( info@vision-things.com ).`,
    `9. عند حدوث أي اختلاف بين الطرفين فإنه يتم حله ودياً وإذا تعذر ذلك يلجأ الطرفين إلى التحكيم فى المملكة العربية السعودية.`,
  ];

  const generatePDF = async () => {
    const input = document.getElementById("contract");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "pt", "a4");
      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "jpg", 0, 0, width, height, "none");
      pdf.autoPrint({ variant: "non-conform" });
      pdf.save("Vision-Things-Contract.pdf");
    });
  };

  const data = {
    name: personalInformation.name,
    phone: personalInformation.phone,
    email: personalInformation.email,
    company_type: personalInformation.company_type,
    commercial_number: personalInformation.commercial_number,
    tax_number: personalInformation.tax_number,
    address: personalInformation.address,
    city: personalInformation.city,
    building_number: personalInformation.building_number,
    street_name: personalInformation.street_name,
    second_number: personalInformation.second_number,
    district: personalInformation.district,
    zip_code: personalInformation.zip_code,
    indoor_cameras: productDetails.indoor_cameras,
    outdoor_cameras: productDetails.outdoor_cameras,
    storage_device: productDetails.storage_device,
    period_of_record: productDetails.period_of_record,
    show_screens: productDetails.show_screens,
    camera_type: productDetails.camera_type,
    contract_date: currentDate,
    expiry_date: expiryDate,
    contract_number: contractNumber,
    paid_amount: totalPrice,
    discount: discount,
  };

  const url = urlsList.contracts;

  useEffect(() => {
    axios
      .get(urlsList.contract_number)
      .then((res) => setContractNumber(res.data))
      .catch((err) => console.log(err));
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <img src={"/images/congrats.png"} alt="congrats" height={400} />
      </Box>
      <Typography variant="h3" color="white" textAlign={"center"}>
        تهانينا
      </Typography>
      <Typography variant="h6" textAlign={"center"} my={2}>
        لقد أنجزت مهمة تقديم تفاصيل العقد، وتم ارسال الفاتورة الى بريدك
        الالكتروني، و يمكنك الآن تحميل نسخة من العقد
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Box mr={2}>
          <Button
            onClick={generatePDF}
            variant="outlined"
            sx={{
              "&:hover": {
                backgroundImage: "linear-gradient(to right,#21C8F6,#637BFF)",
                border: "none",
              },
              height: 60,
              borderRadius: 2,
              px: 5,
              borderColor: "#21C8F6",
              color: "white",
            }}
          >
            تحميل العقد
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          id="contract"
          py={2}
          color={"black"}
          position={"absolute"}
          top={-1000000000}
          left={-1000000000}
          width={2480}
        >
          <Box pl={6} pr={10} pt={8}>
            {/* Date */}
            <p className="m-0">التاريخ/ {currentDate}</p>
            {/* QR Code */}
            <Box px={3}>
              <QRCode
                value={`Name: ${personalInformation.name}, Valid untill: ${expiryDate}`}
                size={80}
              />
            </Box>
            <Box pt={2}>
              <p>رقم العقد {contractNumber}</p>
              {/* Title */}
              <Box display={"flex"} justifyContent={"center"} mt={-2}>
                <h4 className="m-0">عـقـد صـيـانـة كـامـيـرات مـراقـبـة</h4>
              </Box>
            </Box>

            <p>تم الاتفاق بين كل من</p>
            <p>
              الطرف الأول / شركة رؤية الأشياء لتقنـيـة المعـلـــومـات شـركــــة
              شــخص واحــــد بــسجــل تجــاري رقم 4030398257 شـــركة ذات
              مسـؤوليـة مـحـدودة وعنوانها حي الزهراء مدينة جدة وبـريـدهـا
              الإلكتـروني info@vision-things.com
            </p>
            <p>
              الطرف الثاني / {personalInformation.name} بسجل تجاري رقم{" "}
              {personalInformation.commercial_number} ورقم الجوال{" "}
              {personalInformation.phone} وعنوانها {personalInformation.address}{" "}
              وبريدها الإلكتروني {personalInformation.email}{" "}
            </p>
            <p>
              حيث إن الطــرف الأول هي إحـدى الشركــات المرخصـة من قبل الهيئة
              العليا للأمن الصناعي بتركيب وصيانة الأجهزة الأمنية في مدينة جدة
              برخصة رقم 22506073833 , فقد اتفق الطرفان على البنود التـالـيــة :
            </p>
            <p>
              يقوم الطرف الأول بصيانة كاميرات المراقبة الأمنية التابعة للطرف
              الثاني وهي كالاتي :
            </p>
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <table
                width={"100%"}
                style={{
                  border: "2px solid black",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <p>عدد الكاميرات الداخلية</p>
                    </td>
                    <td>
                      <p>{parseInt(productDetails.indoor_cameras)}</p>
                    </td>

                    <td style={{ borderBottom: "none" }}></td>
                    <td>
                      <p>نوع جهاز التخزين</p>
                    </td>
                    <td>{productDetails.storage_device}</td>
                  </tr>
                  <tr>
                    <td>
                      <p>عدد الكاميرات الخارجية</p>
                    </td>
                    <td>
                      <p>{parseInt(productDetails.outdoor_cameras)}</p>
                    </td>
                    <td style={{ borderBottom: "none" }}></td>

                    <td>
                      <p>سعة جهاز التخزين</p>
                    </td>
                    <td>
                      <p>{productDetails.period_of_record}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>مجموع الكاميرات</p>
                    </td>
                    <td>
                      <p>
                        {parseInt(productDetails.outdoor_cameras) +
                          parseInt(productDetails.indoor_cameras)}
                      </p>
                    </td>

                    <td></td>
                    <td>
                      <p>عدد شاشات العرض</p>
                    </td>
                    <td>
                      <p>{productDetails.show_screens}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>وذلك وفق الشروط والأحكام التالية :</p>
            {points.map((point, index) => (
              <p key={index} style={{ fontSize: "small" }}>
                {point}
              </p>
            ))}
            <p style={{ textAlign: "center", margin: 0 }}>والله ولي التوفيق</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <p>الطرف الأول</p>
                <p>شركة رؤية الأشياء لتقنية المعلومات</p>
                {/* Stamp */}
                <div id={"stamp"}>
                  <img src="/images/stamp.png" alt="Stamp" width={100} />
                </div>
                {/* Signature */}
                <div style={{ position: "absolute", top: "50%" }}>
                  <img
                    src="/images/signature.png"
                    alt="Signature"
                    width={150}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>الطرف الثاني</p>
                <p></p>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FinalContract;
