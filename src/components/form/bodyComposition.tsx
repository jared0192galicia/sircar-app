import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function BodyComposition() {
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
          label="Peso (Kg)"
          value={entrevistador}
          onChange={(e) => updateField('entrevistador', e)}
        />
        <Input
          label="Talla (metros)"
          value={numeroCaso}
          onChange={(e) => updateField('numeroCaso', e)}
        />
        <Dropdown
          label="IMC"
          value={fechaEvaluacion}
          placeholder="POSIBLE CALCULADO"
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Dropdown
          label="Categoría de IMC"
          value={fechaEvaluacion}
          placeholder="POSIBLE CALCULADO"
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Input
          label="Circunferencia de la cintura (cm)"
          value={entrevistador}
          onChange={(e) => updateField('entrevistador', e)}
        />
        <Input
          label="Circunferencia de la cadera (cm)"
          value={numeroCaso}
          onChange={(e) => updateField('numeroCaso', e)}
        />
        <Dropdown
          label="Riesgo por cintura"
          value={fechaEvaluacion}
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Dropdown
          label="Riesgo por cadera"
          value={fechaEvaluacion}
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        
      </Section>
    </div>
  );
}
