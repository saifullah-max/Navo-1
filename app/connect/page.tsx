"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavogateUniverse from "@/components/navogateUniverse";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from '@emailjs/browser'

import React, { useRef, useState } from "react";

const countries = [
  { code: "af", name: "Afghanistan" },
  { code: "al", name: "Albania" },
  { code: "dz", name: "Algeria" },
  { code: "ad", name: "Andorra" },
  { code: "ao", name: "Angola" },
  { code: "ag", name: "Antigua and Barbuda" },
  { code: "ar", name: "Argentina" },
  { code: "am", name: "Armenia" },
  { code: "au", name: "Australia" },
  { code: "at", name: "Austria" },
  { code: "az", name: "Azerbaijan" },
  { code: "bs", name: "Bahamas" },
  { code: "bh", name: "Bahrain" },
  { code: "bd", name: "Bangladesh" },
  { code: "bb", name: "Barbados" },
  { code: "by", name: "Belarus" },
  { code: "be", name: "Belgium" },
  { code: "bz", name: "Belize" },
  { code: "bj", name: "Benin" },
  { code: "bt", name: "Bhutan" },
  { code: "bo", name: "Bolivia" },
  { code: "ba", name: "Bosnia and Herzegovina" },
  { code: "bw", name: "Botswana" },
  { code: "br", name: "Brazil" },
  { code: "bn", name: "Brunei" },
  { code: "bg", name: "Bulgaria" },
  { code: "bf", name: "Burkina Faso" },
  { code: "bi", name: "Burundi" },
  { code: "cv", name: "Cabo Verde" },
  { code: "kh", name: "Cambodia" },
  { code: "cm", name: "Cameroon" },
  { code: "ca", name: "Canada" },
  { code: "cf", name: "Central African Republic" },
  { code: "td", name: "Chad" },
  { code: "cl", name: "Chile" },
  { code: "cn", name: "China" },
  { code: "co", name: "Colombia" },
  { code: "km", name: "Comoros" },
  { code: "cd", name: "Congo (DRC)" },
  { code: "cg", name: "Congo (Republic)" },
  { code: "cr", name: "Costa Rica" },
  { code: "ci", name: "Côte d’Ivoire" },
  { code: "hr", name: "Croatia" },
  { code: "cu", name: "Cuba" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czech Republic" },
  { code: "dk", name: "Denmark" },
  { code: "dj", name: "Djibouti" },
  { code: "dm", name: "Dominica" },
  { code: "do", name: "Dominican Republic" },
  { code: "ec", name: "Ecuador" },
  { code: "eg", name: "Egypt" },
  { code: "sv", name: "El Salvador" },
  { code: "gq", name: "Equatorial Guinea" },
  { code: "er", name: "Eritrea" },
  { code: "ee", name: "Estonia" },
  { code: "sz", name: "Eswatini" },
  { code: "et", name: "Ethiopia" },
  { code: "fj", name: "Fiji" },
  { code: "fi", name: "Finland" },
  { code: "fr", name: "France" },
  { code: "ga", name: "Gabon" },
  { code: "gm", name: "Gambia" },
  { code: "ge", name: "Georgia" },
  { code: "de", name: "Germany" },
  { code: "gh", name: "Ghana" },
  { code: "gr", name: "Greece" },
  { code: "gd", name: "Grenada" },
  { code: "gt", name: "Guatemala" },
  { code: "gn", name: "Guinea" },
  { code: "gw", name: "Guinea-Bissau" },
  { code: "gy", name: "Guyana" },
  { code: "ht", name: "Haiti" },
  { code: "hn", name: "Honduras" },
  { code: "hu", name: "Hungary" },
  { code: "is", name: "Iceland" },
  { code: "in", name: "India" },
  { code: "id", name: "Indonesia" },
  { code: "ir", name: "Iran" },
  { code: "iq", name: "Iraq" },
  { code: "ie", name: "Ireland" },
  { code: "il", name: "Israel" },
  { code: "it", name: "Italy" },
  { code: "jm", name: "Jamaica" },
  { code: "jp", name: "Japan" },
  { code: "jo", name: "Jordan" },
  { code: "kz", name: "Kazakhstan" },
  { code: "ke", name: "Kenya" },
  { code: "ki", name: "Kiribati" },
  { code: "kp", name: "North Korea" },
  { code: "kr", name: "South Korea" },
  { code: "kw", name: "Kuwait" },
  { code: "kg", name: "Kyrgyzstan" },
  { code: "la", name: "Laos" },
  { code: "lv", name: "Latvia" },
  { code: "lb", name: "Lebanon" },
  { code: "ls", name: "Lesotho" },
  { code: "lr", name: "Liberia" },
  { code: "ly", name: "Libya" },
  { code: "li", name: "Liechtenstein" },
  { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" },
  { code: "mg", name: "Madagascar" },
  { code: "mw", name: "Malawi" },
  { code: "my", name: "Malaysia" },
  { code: "mv", name: "Maldives" },
  { code: "ml", name: "Mali" },
  { code: "mt", name: "Malta" },
  { code: "mh", name: "Marshall Islands" },
  { code: "mr", name: "Mauritania" },
  { code: "mu", name: "Mauritius" },
  { code: "mx", name: "Mexico" },
  { code: "fm", name: "Micronesia" },
  { code: "md", name: "Moldova" },
  { code: "mc", name: "Monaco" },
  { code: "mn", name: "Mongolia" },
  { code: "me", name: "Montenegro" },
  { code: "ma", name: "Morocco" },
  { code: "mz", name: "Mozambique" },
  { code: "mm", name: "Myanmar" },
  { code: "na", name: "Namibia" },
  { code: "nr", name: "Nauru" },
  { code: "np", name: "Nepal" },
  { code: "nl", name: "Netherlands" },
  { code: "nz", name: "New Zealand" },
  { code: "ni", name: "Nicaragua" },
  { code: "ne", name: "Niger" },
  { code: "ng", name: "Nigeria" },
  { code: "mk", name: "North Macedonia" },
  { code: "no", name: "Norway" },
  { code: "om", name: "Oman" },
  { code: "pk", name: "Pakistan" },
  { code: "pw", name: "Palau" },
  { code: "ps", name: "Palestine" },
  { code: "pa", name: "Panama" },
  { code: "pg", name: "Papua New Guinea" },
  { code: "py", name: "Paraguay" },
  { code: "pe", name: "Peru" },
  { code: "ph", name: "Philippines" },
  { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" },
  { code: "qa", name: "Qatar" },
  { code: "ro", name: "Romania" },
  { code: "ru", name: "Russia" },
  { code: "rw", name: "Rwanda" },
  { code: "kn", name: "Saint Kitts and Nevis" },
  { code: "lc", name: "Saint Lucia" },
  { code: "vc", name: "Saint Vincent and the Grenadines" },
  { code: "ws", name: "Samoa" },
  { code: "sm", name: "San Marino" },
  { code: "st", name: "Sao Tome and Principe" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "sn", name: "Senegal" },
  { code: "rs", name: "Serbia" },
  { code: "sc", name: "Seychelles" },
  { code: "sl", name: "Sierra Leone" },
  { code: "sg", name: "Singapore" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },
  { code: "sb", name: "Solomon Islands" },
  { code: "so", name: "Somalia" },
  { code: "za", name: "South Africa" },
  { code: "ss", name: "South Sudan" },
  { code: "es", name: "Spain" },
  { code: "lk", name: "Sri Lanka" },
  { code: "sd", name: "Sudan" },
  { code: "sr", name: "Suriname" },
  { code: "se", name: "Sweden" },
  { code: "ch", name: "Switzerland" },
  { code: "sy", name: "Syria" },
  { code: "tw", name: "Taiwan" },
  { code: "tj", name: "Tajikistan" },
  { code: "tz", name: "Tanzania" },
  { code: "th", name: "Thailand" },
  { code: "tl", name: "Timor-Leste" },
  { code: "tg", name: "Togo" },
  { code: "to", name: "Tonga" },
  { code: "tt", name: "Trinidad and Tobago" },
  { code: "tn", name: "Tunisia" },
  { code: "tr", name: "Turkey" },
  { code: "tm", name: "Turkmenistan" },
  { code: "tv", name: "Tuvalu" },
  { code: "ug", name: "Uganda" },
  { code: "ua", name: "Ukraine" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "uy", name: "Uruguay" },
  { code: "uz", name: "Uzbekistan" },
  { code: "vu", name: "Vanuatu" },
  { code: "va", name: "Vatican City" },
  { code: "ve", name: "Venezuela" },
  { code: "vn", name: "Vietnam" },
  { code: "ye", name: "Yemen" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
];


interface AdmissionForm {
  firstname: string;
  lastname: string;
  gender: string;
  admissionNeed: string;
  parentFirstname: string;
  parentLastname: string;
  email: string;
  confirmEmail: string;
  phone: string;
  country: string;
  city: string;
  currentSchool: string;
  currentYear: string;
  graduationYear: string;
  comments: string;
  privacyAcknowledged: string;
  [key: string]: unknown;
}

export default function Page() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState<AdmissionForm>({
    firstname: "",
    lastname: "",
    gender: "",
    admissionNeed: "",
    parentFirstname: "",
    parentLastname: "",
    email: "",
    confirmEmail: "",
    phone: "",
    country: "",
    city: "",
    currentSchool: "",
    currentYear: "",
    graduationYear: "",
    comments: "",
    privacyAcknowledged: "",
  });

  const update = (field: keyof AdmissionForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    if (!formData.firstname.trim()) return "First name required";
    if (!formData.lastname.trim()) return "Last name required";
    if (!formData.gender) return "Gender required";
    if (!formData.admissionNeed) return "Admission need required";
    if (!formData.parentFirstname.trim()) return "Parent first name required";
    if (!formData.parentLastname.trim()) return "Parent last name required";
    if (!formData.email.trim()) return "Email required";
    if (formData.email !== formData.confirmEmail) return "Emails must match";
    if (!formData.phone.trim()) return "Phone required";
    if (!formData.country) return "Country required";
    if (!formData.city.trim()) return "City required";
    if (formData.privacyAcknowledged !== "Yes")
      return "You must accept the privacy policy";

    return null;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const err = validate();
    if (err) {
      setError(true);
      alert(err);
      return;
    }

    emailjs
      .send(
        "service_yes9ab6",
        "template_bp3mixt",
        formData,
        "WCINshXhOs_J9duQ4"
      )
      .then(() => {
        setSuccess(true);

        setFormData({
          firstname: "",
          lastname: "",
          gender: "",
          admissionNeed: "",
          parentFirstname: "",
          parentLastname: "",
          email: "",
          confirmEmail: "",
          phone: "",
          country: "",
          city: "",
          currentSchool: "",
          currentYear: "",
          graduationYear: "",
          comments: "",
          privacyAcknowledged: "",
        });
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-poppins font-black text-4xl lg:text-6xl text-center text-[#03336d] mb-8 uppercase mt-10">
            Speak to Us
          </h1>
        </div>
      </div>

      <div className="bg-gray-50 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={sendEmail} className="text-gray-700">

            {/* Student Name */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Name of Student: *
              </Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    value={formData.firstname}
                    onChange={(e) => update("firstname", e.target.value)}
                    className="w-full h-12 border-2 rounded-md px-4"
                  />
                  <span className="text-sm">First</span>
                </div>

                <div>
                  <Input
                    value={formData.lastname}
                    onChange={(e) => update("lastname", e.target.value)}
                    className="w-full h-12 border-2 rounded-md px-4"
                  />
                  <span className="text-sm">Last</span>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Gender: *
              </Label>

              <RadioGroup
                value={formData.gender}
                onValueChange={(v) => update("gender", v)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Admission Need */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Admissions Need: *
              </Label>

              <Select
                value={formData.admissionNeed}
                onValueChange={(v) => update("admissionNeed", v)}
              >
                <SelectTrigger className="w-full h-12 border-2 px-4">
                  <SelectValue placeholder="Choose Admissions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Undergraduate Counseling">Undergraduate Counseling</SelectItem>
                  <SelectItem value="Graduate Counseling">Graduate Counseling</SelectItem>
                  <SelectItem value="Transfer">Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Parent Name */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Name of Parent: *
              </Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <Input
                  value={formData.parentFirstname}
                  onChange={(e) => update("parentFirstname", e.target.value)}
                  className="h-12 border-2 px-4"
                />
                <Input
                  value={formData.parentLastname}
                  onChange={(e) => update("parentLastname", e.target.value)}
                  className="h-12 border-2 px-4"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Email: *
              </Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <Input
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  type="email"
                  className="h-12 border-2 px-4"
                />
                <Input
                  value={formData.confirmEmail}
                  onChange={(e) => update("confirmEmail", e.target.value)}
                  type="email"
                  className="h-12 border-2 px-4"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Phone: *
              </Label>
              <Input
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full max-w-md h-12 border-2 px-4"
              />
            </div>

            {/* Country */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Country: *
              </Label>

              <Select
                value={formData.country}
                onValueChange={(v) => update("country", v)}
              >
                <SelectTrigger className="w-full max-w-md h-12 border-2 px-4">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                City: *
              </Label>
              <Input
                value={formData.city}
                onChange={(e) => update("city", e.target.value)}
                className="max-w-md h-12 border-2 px-4"
              />
            </div>

            {/* School */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Current School/University:
              </Label>
              <Input
                value={formData.currentSchool}
                onChange={(e) => update("currentSchool", e.target.value)}
                className="max-w-md h-12 border-2 px-4"
              />
            </div>

            {/* Year */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Current Year:
              </Label>
              <Input
                value={formData.currentYear}
                onChange={(e) => update("currentYear", e.target.value)}
                className="max-w-md h-12 border-2 px-4"
              />
            </div>

            {/* Graduation Year */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Graduation Year:
              </Label>
              <Input
                value={formData.graduationYear}
                onChange={(e) => update("graduationYear", e.target.value)}
                className="max-w-md h-12 border-2 px-4"
              />
            </div>

            {/* Comments */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d]">
                Comments:
              </Label>
              <textarea
                value={formData.comments}
                onChange={(e) => update("comments", e.target.value)}
                className="w-full h-32 border-2 rounded-md px-4 py-3"
              />
            </div>

            {/* Privacy */}
            <div className="mb-8">
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={formData.privacyAcknowledged === "Yes"}
                  onCheckedChange={(v) =>
                    update("privacyAcknowledged", v ? "Yes" : "No")
                  }
                  id="privacy"
                />
                <Label htmlFor="privacy">
                  I understand that I will receive an automatic email…
                </Label>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellowCust rounded-full px-10 py-6"
              >
                SUBMIT
              </button>

              {success && (
                <p className="text-green-600 mt-4 font-medium">
                  ✅ Form sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-600 mt-4 font-medium">
                  ❌ Failed to send. Try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <NavogateUniverse />
      <Footer />
    </div>
  );
}
