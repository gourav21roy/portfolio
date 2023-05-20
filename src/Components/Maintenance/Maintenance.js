import MaintenanceImage from "../../Assets/Images/maintenance.svg";
export function Maintenance() {
  return (
    <div className="flex flex-col justify-center w-screen h-screen">
      <div className="md:self-center md:w-2/5 maint p-5">
        <img  src={MaintenanceImage} alt="Maintenance" />
      </div>
      <div className="text-center">
        <span className="text-c3 bg-slate-800 p-3  rounded-sm text-lg font-mono text-center">Work in Progress</span>
      </div>
    </div>
  );
}
