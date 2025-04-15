
const categories = [
  {
    name: "Wedding Cakes",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481280422_597960466399404_4053029048074491268_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s1t6YZ_QvwIQ7kNvwH_C7El&_nc_oc=AdmwV7H5RZGwb-6WRULVv_AuvnFbnfREjrve3vzUvgeAdbcU6ST8e6orte9R5DOYXv4BtvTuILL6f4LIbNx6aC5Q&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=nLBHd3s-kS-AVHOY4RqEAA&oh=00_AfEmJH5XJ-sYdz0OEzkuIXkfosqtGFMr48Go-l5VJj08dQ&oe=6803F1E4"
  },
  {
    name: "Engagement Cakes",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/482251437_603018949226889_4408773533246105050_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Wdr07UgL0DwQ7kNvwED2XuF&_nc_oc=Adm-k92XQNoXYCBJPjIdwTgrinVQk68N7r7W_1hRd_sdTemOuB1ykO2eoogxKLA2_7DdXGmDd4zem3UN9lG7yiD0&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=dyA8GbwEc7NPagFl4XfiwQ&oh=00_AfFLMK4zEmjSfRHexcX7w-Jr6wLry9L3MDs0mOcpm1hPqA&oe=6803C939"
  },
  {
    name: "Birthday Cakes",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481053330_593741980154586_1490201074741681455_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7YBh-cyWxncQ7kNvwFIxwtr&_nc_oc=Adl4WIygsa20Vt2UBZHh53SHQ-fhNcJ_AtJi6MQZyR_2P4qkKUCaX9jWIttkBG-CLMqw8_mn-7fOlZhw_OavtMu5&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=2A6y2Ss1aGnoZAMLqBCL5w&oh=00_AfHAFNxYrpdhwa5ExF5a2li6SHlhxmjLcImO2vLst6xCug&oe=6803DDAD"
  },
  {
    name: "Mini Cakes",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481771058_599448496250601_8223274961044517358_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uYE5r7PgcJgQ7kNvwFI8SoO&_nc_oc=AdmWgwIoEf1rfYsAIsguJJ2DCz3RwOQROQHK9314CaxjQUnmBcrQTUY2o9krpYChb-R9ikcOGafVQ1CJtAQpwK9A&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=iJhiNaYzrDL2oWMh2WcImg&oh=00_AfF3ABZJ213SqFK4QIKqX1-QIaeu4ULbxMAMCwf17wsN9w&oe=6803DB2D"
  },
  {
    name: "Sweet Treats",
    image: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481442906_595920323270085_841308014403174249_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DaCtLf4jzLgQ7kNvwGxvZuR&_nc_oc=AdkBma6gKEirnlekfpsWID-N-GxcgAnKueJkNyJy7sVcGAl57FC_IsyNiopCDO_-q4s9DOzVDiliTQbcUklf7zMP&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=vM4oP51Cbt39OVutt9v1_Q&oh=00_AfHltC-hTdnLHIPLcHZQ3oTGjH4LBLTq_0dFKjLQnHIutw&oe=6803D766"
  }
];

const Categories = () => {
  return (
    <div className="grid grid-cols-5 gap-6 py-12">
      {categories.map((category, index) => (
        <div key={index} className="text-center">
          <div className="w-full aspect-square rounded-full overflow-hidden mb-4">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium">{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;