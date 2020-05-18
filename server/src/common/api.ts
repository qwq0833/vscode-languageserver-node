/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export { WorkDoneProgressReporter, ResultProgressReporter };

import { _, Features } from 'common/server';

import * as st from './semanticTokens.proposed';

export namespace ProposedFeatures {
	export const all: Features<_, _, _, _, _, _, st.SemanticTokens> = {
		__brand: 'features',
		languages: st.SemanticTokensFeature
	};

	export type SemanticTokensBuilder = st.SemanticTokensBuilder;
	export const SemanticTokensBuilder = st.SemanticTokensBuilder;
}