import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function BodyComposition() {
  const {
    updateField,
    pesoKg,
    tallaMts,
    imc,
    categoriaImc,
    circunferenciaCinturaCm,
    circunferenciaCaderaCm,
    riesgoCadera,
    riesgoCintura,
    porcentajeGrasaCorporal,
    grasaVisceralValor,
    masaMuscularKg,
    porcentajeAguaCorporal,
    edadMetabolica,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Composición Corporal" />

      <Section title="">
        <Input
          label="Peso (Kg)"
          value={pesoKg || 0}
          onChange={(e) => updateField("pesoKg", parseInt(e))}
        />
        <Input
          label="Talla (metros)"
          value={tallaMts || 0}
          onChange={(e) => updateField("tallaMts", parseInt(e))}
        />
        <Dropdown
          label="IMC"
          value={imc || 0}
          placeholder="POSIBLE CALCULADO"
          onChange={(val) => updateField("imc", parseInt(val))}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Dropdown
          label="Categoría de IMC"
          value={categoriaImc || ""}
          placeholder="POSIBLE CALCULADO"
          onChange={(val) => updateField("categoriaImc", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Input
          label="Circunferencia de la cintura (cm)"
          value={circunferenciaCinturaCm || 0}
          onChange={(e) => updateField("circunferenciaCinturaCm", parseInt(e))}
        />
        <Input
          label="Circunferencia de la cadera (cm)"
          value={circunferenciaCaderaCm || 0}
          onChange={(e) => updateField("circunferenciaCaderaCm", parseInt(e))}
        />
        <Dropdown
          label="Riesgo por cintura"
          value={riesgoCintura || ""}
          onChange={(val) => updateField("riesgoCintura", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Dropdown
          label="Riesgo por cadera"
          value={riesgoCadera || ""}
          onChange={(val) => updateField("riesgoCadera", val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Input
          label="Grasa Corporal"
          value={porcentajeGrasaCorporal || 0}
          onChange={(e) => updateField("porcentajeGrasaCorporal", parseInt(e))}
        />
        <Input
          label="Masa Muscular"
          value={masaMuscularKg || 0}
          onChange={(e) => updateField("masaMuscularKg", parseInt(e))}
        />
        <Input
          label="Agua Corporal"
          value={porcentajeAguaCorporal || 0}
          onChange={(e) => updateField("porcentajeAguaCorporal", parseInt(e))}
        />
        <Input
          label="Grasa Visceral"
          value={grasaVisceralValor || 0}
          onChange={(e) => updateField("grasaVisceralValor", parseInt(e))}
        />
        <Input
          label="Edad Metabólica"
          value={edadMetabolica || 0}
          onChange={(e) => updateField("edadMetabolica", parseInt(e))}
        />
      </Section>
    </div>
  );
}
