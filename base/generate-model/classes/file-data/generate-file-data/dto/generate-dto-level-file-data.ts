import { generateModelsLevelFileData } from './models';
import { generateInputsLevelFileData } from './inputs';
import { IFileDataDto } from '../../../../interfaces/file-data';
import { IModelName, IModelAttributes } from '../../../../interfaces';

interface IProps {
	modelName: IModelName;
	modelAttributes: IModelAttributes;
}

const generateDtoLevelFileData = ({
	modelName,
	modelAttributes,
}: IProps): IFileDataDto => {
	const inputs = generateInputsLevelFileData({
		modelName,
		modelAttributes,
	});
	const models = generateModelsLevelFileData({
		modelName,
		modelAttributes,
	});

	return {
		inputs,
		models,
	};
};

export default generateDtoLevelFileData;
