import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function PhysicalActivity() {
  const {
    actividadFisica,
    minutosActividadFisica,
    diasActividadFisica,
    promedioActividadFisica,
    nivelActividadFisica,

    updateField,
    entrevistador,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Actividad Física" />

      <Section title="">
        <Input
          label="Tipo de actividad física que realiza"
          value={entrevistador}
          onChange={(e) => updateField("entrevistador", e)}
        />
        <Input
          label="Días de la semana que lo realiza"
          value={diasActividadFisica || 0}
          onChange={(e) => updateField("diasActividadFisica", parseInt(e))}
        />
        <Input
          label="Minutos al día que lo realiza"
          value={minutosActividadFisica || 0}
          onChange={(e) => updateField("minutosActividadFisica", parseInt(e))}
        />
        <Input
          label="Promedio de actividad física (min/semana)"
          value={promedioActividadFisica || 0}
          onChange={(e) => updateField("promedioActividadFisica", parseInt(e))}
        />
        <Dropdown
          label="Nivel de actividad física"
          value={nivelActividadFisica || ""}
          onChange={(val) => updateField("nivelActividadFisica", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
      </Section>
    </div>
  );
}
