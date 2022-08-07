import { Character } from '../../../../../../../../../enums';
import { IModel } from '../../../../../../../../../interfaces/model';

interface IProps {
	model: IModel;
}

const generateFindOneImports = ({ model }: IProps) => {
	let data = '';

	data += `import request from 'supertest';
		import query from '../queries/find-all.query';
		import { INestApplication, HttpStatus } from '@nestjs/common';
		import initializeTestApp from '../../../helpers/init/initializeTestApp';
		import { allModelsCount } from '../../../../prisma/seeds/${model.name.plural.paramCase}.seed';
		import expected${model.name.singular.pascalCase}Object from '../expected-objects/expected-${model.name.singular.paramCase}-with-empty-relation-object';
		import { redisClient } from '../../../../src/server/initialize/initialize-redis';`;

	data += Character.LINE_BREAK;

	return data;
};

export default generateFindOneImports;
