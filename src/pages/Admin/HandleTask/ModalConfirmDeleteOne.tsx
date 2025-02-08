import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import ButtonDefault from "../../../components/ButtonDefault"; 

interface ModalConfirmDeleteProps {
    task: { nom: string };
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ModalConfirmDelete({ task, onConfirm, onCancel }: ModalConfirmDeleteProps) {
    return (
        
        <Dialog open={true} handler={onCancel}>
            <DialogHeader>Confirmer la suppression</DialogHeader>
            <DialogBody>
                <p>Êtes-vous sûr de vouloir supprimer la tâche <strong>{task.nom}</strong> ?</p>
            </DialogBody>
            <DialogFooter>
            <ButtonDefault onClick={onConfirm} className="bg-red-500 text-white">Supprimer</ButtonDefault>
                <ButtonDefault onClick={onCancel}>Annuler</ButtonDefault>
            </DialogFooter>
        </Dialog>
    );
}
