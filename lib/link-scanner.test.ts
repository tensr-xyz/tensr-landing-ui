import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  isLinkScannerExceptionEvent,
  isLinkScannerMessage,
  withoutLinkScannerException,
} from './link-scanner.ts';

const SCANNER = 'Object Not Found Matching Id:3, MethodName:update, ParamCount:4';
const REJECTION = `Non-Error promise rejection captured with value: ${SCANNER}`;

describe('isLinkScannerMessage', () => {
  it('matches the Safe Links error and the unhandled-rejection form', () => {
    assert.equal(isLinkScannerMessage(SCANNER), true);
    assert.equal(isLinkScannerMessage(REJECTION), true);
    assert.equal(
      isLinkScannerMessage('Object Not Found Matching Id:1, MethodName:update, ParamCount:4'),
      true
    );
  });

  it('ignores unrelated errors and a partial fingerprint', () => {
    assert.equal(isLinkScannerMessage('Object Not Found Matching Id:3'), false);
    assert.equal(isLinkScannerMessage('Failed to fetch'), false);
  });
});

describe('withoutLinkScannerException', () => {
  it('drops a scanner $exception and marks the session', () => {
    let marked = 0;
    const event = {
      event: '$exception',
      properties: {
        $exception_list: [{ type: 'Error', value: SCANNER }],
      },
    };
    assert.equal(
      withoutLinkScannerException(event, () => {
        marked += 1;
      }),
      null
    );
    assert.equal(marked, 1);
  });

  it('drops the unhandled-rejection message on $exception_message', () => {
    let marked = 0;
    assert.equal(
      withoutLinkScannerException(
        { event: '$exception', properties: { $exception_message: REJECTION } },
        () => {
          marked += 1;
        }
      ),
      null
    );
    assert.equal(marked, 1);
  });

  it('keeps pageviews and other exceptions', () => {
    let marked = 0;
    const pageview = {
      event: '$pageview',
      properties: { $current_url: 'https://www.tensr.xyz/' },
    };
    assert.equal(
      withoutLinkScannerException(pageview, () => {
        marked += 1;
      }),
      pageview
    );
    const other = {
      event: '$exception',
      properties: { $exception_list: [{ value: 'Failed to fetch' }] },
    };
    assert.equal(
      withoutLinkScannerException(other, () => {
        marked += 1;
      }),
      other
    );
    assert.equal(isLinkScannerExceptionEvent(pageview), false);
    assert.equal(marked, 0);
  });
});
