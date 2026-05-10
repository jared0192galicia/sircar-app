import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function PhysicalActivity() {
  const {
    nombres,
    sexo,
    fechaEvaluacion,
    numeroCaso,
    licenciatura,
    apellidoMaterno,
    apellidoPaterno,
    edadCumplidos,
    grupo,
    updateField,
    entrevistador,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Composición Corporal" />

      <Section title="">
        <Input
          label="Tipo de actividad física que realiza"
          value={entrevistador}
          onChange={(e) => updateField("entrevistador", e)}
        />
        <Input
          label="Días de la semana que lo realiza"
          value={numeroCaso}
          onChange={(e) => updateField("numeroCaso", e)}
        />
        <Input
          label="Minutos al día que lo realiza"
          value={numeroCaso}
          onChange={(e) => updateField("numeroCaso", e)}
        />
        <Input
          label="Promedio de actividad física (min/semana)"
          value={entrevistador}
          onChange={(e) => updateField("entrevistador", e)}
        />
        <Dropdown
          label="Nivel de actividad física"
          value={fechaEvaluacion}
          onChange={(val) => updateField("fechaEvaluacion", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
      </Section>
    </div>
  );
}
