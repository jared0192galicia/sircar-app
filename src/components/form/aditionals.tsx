import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function Aditionals() {
  const {
    requierePruebaGlucosa,
    cifraGlicemia,
    observaciones,
    riesgoGeneral,
    updateField,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Extra" />

      <Section title="Glucosa">
        <Dropdown
          label="¿Requiere prueba de Glucosa?"
          value={requierePruebaGlucosa || ""}
          onChange={(val) => updateField("requierePruebaGlucosa", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Input
          label="Glucemina"
          value={cifraGlicemia || 0}
          onChange={(e) => updateField("cifraGlicemia", e)}
        />
        <Input
          label="Riesgo"
          value={riesgoGeneral || ""}
          onChange={(e) => updateField("riesgoGeneral", e)}
        />
      </Section>
      <Section title="Adicionales">
        <Input
          label="Observaciones"
          value={observaciones || ""}
          onChange={(e) => updateField("observaciones", e)}
        />
      </Section>
    </div>
  );
}
