import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

export default function Page() {
  return (
    <AppLayout title="FILE A COMPLAINT - CIVICSETU" showBackButton={true}>
      <div className="w-full h-full relative">
        {/* Extracted from Stitch HTML */}
        {/* Top Bar */}

{/* Main Content Canvas */}
<main className="flex-1 mt-16 mb-16 overflow-y-auto px-md py-lg max-w-2xl mx-auto w-full custom-scrollbar">
{/* Step Indicator */}
<div className="mb-lg">
<p className="font-label-md text-label-md text-on-surface-variant">Step 1 of 2: Details</p>
<div className="w-full bg-outline-variant h-1 mt-sm rounded-full">
<div className="bg-primary h-1 w-1/2 rounded-full"></div>
</div>
</div>
{/* Form Section */}
<div className="bg-surface border border-outline-variant p-lg rounded shadow-none space-y-xl">
{/* Complaint Category */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="category">Complaint Category</label>
<div className="relative">
<select className="w-full h-12 px-md bg-surface border border-outline-variant rounded appearance-none font-body-md text-body-md focus:border-primary focus:ring-0" id="category">
<option disabled="" selected="" value="">Select a category</option>
<option value="water">Water Supply</option>
<option value="lighting">Street Lighting</option>
<option value="road">Road Repair</option>
<option value="waste">Waste Collection</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
{/* Complaint Title */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="title">Complaint Title</label>
<input className="w-full h-12 px-md bg-surface border border-outline-variant rounded font-body-md text-body-md focus:border-primary focus:ring-0" id="title" placeholder="e.g., Street light not working since 3 days" type="text"/>
</div>
{/* Description */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface" htmlFor="description">Description</label>
<textarea className="w-full p-md bg-surface border border-outline-variant rounded font-body-md text-body-md leading-[25.6px] focus:border-primary focus:ring-0 resize-none" id="description" placeholder="Please provide detailed information about the issue..." rows="4"></textarea>
<p className="font-label-sm text-label-sm text-on-surface-variant">Be specific to help our team resolve the issue faster.</p>
</div>
{/* Location */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface">Issue Location</label>
<div className="relative w-full h-48 bg-surface-container rounded overflow-hidden border border-outline-variant">
<div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="A clean, professional digital map interface showing a suburban grid layout in high-contrast light mode. The map features minimal labels, a subtle gray and white color palette, and a circular blue pulse icon indicating a location. The visual style is strictly administrative and functional, matching a government governance application's aesthetic." style={{ backgroundImage: "url('https", }}></div>
<div className="absolute inset-0 bg-black/5 flex items-center justify-center">
<div className="bg-surface px-md py-sm rounded-full flex items-center gap-sm shadow-sm border border-outline-variant">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1", }}>location_on</span>
<span className="font-label-sm text-label-sm text-on-surface">Confirming coordinates...</span>
</div>
</div>
</div>
<button className="w-full h-11 bg-primary-container text-on-primary flex items-center justify-center gap-sm rounded font-label-md text-label-md hover:bg-opacity-90 transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">my_location</span>
                    Tag Current Location
                </button>
</div>
{/* Photo Evidence */}
<div className="flex flex-col gap-sm">
<label className="font-label-md text-label-md text-on-surface">Photo Evidence</label>
<div className="border-2 border-dashed border-outline-variant rounded p-lg flex flex-col items-center justify-center gap-md hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">add_a_photo</span>
</div>
<div className="text-center">
<p className="font-label-md text-label-md text-primary font-semibold">Add Photo/Evidence</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">PNG, JPG up to 10MB</p>
</div>
</div>
</div>
{/* CTA */}
<div className="pt-md">
<button className="w-full h-12 bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm rounded flex items-center justify-center gap-sm active:scale-[0.98] transition-transform shadow-sm" style={{ backgroundColor: "#D97706", color: "#FFFFFF", }}>
                    Next: Review
                </button>
</div>
</div>
</main>
{/* Bottom Navigation Bar (Contextual) */}
<nav className="sticky bottom-0 left-0 w-full flex justify-around items-center h-16 z-50 bg-surface-container-lowest border-t border-outline-variant md:hidden">
{/* Map */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-sm text-[12px] mt-1">Map</span>
</a>
{/* Tasks (Active State - Complaints maps to Tasks in this context) */}
<a className="flex flex-col items-center justify-center text-secondary font-bold hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="assignment" style={{ fontVariationSettings: "'FILL' 1", }}>assignment</span>
<span className="font-label-sm text-[12px] mt-1">Tasks</span>
</a>
{/* Upload */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
<span className="font-label-sm text-[12px] mt-1">Upload</span>
</a>
{/* Profile */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high w-full h-full transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-[12px] mt-1">Profile</span>
</a>
</nav>
{/* Desktop Navigation Side Panel (Hidden on Mobile) */}
